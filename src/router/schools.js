const express = require('express');
const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
return R * c;



// POST /addSchool
router.post('/addSchool', async (req, res) => {
    try {
        const { error, value } = addSchoolSchema.validate(req.body);
        if (error) return res.status(400).json({ error: error.details[0].message });


        const { name, address, latitude, longitude } = value;


        const sql = `INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)`;
        const [result] = await pool.execute(sql, [name, address, latitude, longitude]);


        const [rows] = await pool.execute('SELECT * FROM schools WHERE id = ?', [result.insertId]);
        res.status(201).json({ message: 'School added', school: rows[0] });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
});


// GET /listSchools?lat=..&lng=..
router.get('/listSchools', async (req, res) => {
    try {
        const { error, value } = listSchoolsSchema.validate(req.query);
        if (error) return res.status(400).json({ error: error.details[0].message });


        const userLat = Number(value.lat);
        const userLng = Number(value.lng);


        const [schools] = await pool.execute('SELECT id, name, address, latitude, longitude, created_at FROM schools');


        // Compute distance for each and sort
        const schoolsWithDistance = schools.map(s => {
            const distance_km = haversineDistance(userLat, userLng, Number(s.latitude), Number(s.longitude));
            return { ...s, distance_km: Number(distance_km.toFixed(4)) };
        });


        schoolsWithDistance.sort((a, b) => a.distance_km - b.distance_km);


        res.json({ count: schoolsWithDistance.length, schools: schoolsWithDistance });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
});


module.exports = router;