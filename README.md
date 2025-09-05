A simple Postman collection example. Import into Postman and set `{{baseUrl}}` to your server (e.g., http://localhost:3000)
*/
{
"info": {
"name": "School API Collection",
"_postman_id": "school-api-collection",
"description": "Collection for testing School Management APIs",
"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
},
"item": [
{
"name": "Health Check",
"request": {
"method": "GET",
"header": [],
"url": {
"raw": "{{baseUrl}}/",
"host": ["{{baseUrl}}"],
"path": ["/"]
}
},
"response": []
},
{
"name": "Add School",
"request": {
"method": "POST",
"header": [
{ "key": "Content-Type", "value": "application/json" }
],
"body": {
"mode": "raw",
"raw": "{\n \"name\": \"Greenfield High School\",\n \"address\": \"123 Green St, MyCity\",\n \"latitude\": 28.6139,\n \"longitude\": 77.2090\n}"
},
"url": {
"raw": "{{baseUrl}}/addSchool",
"host": ["{{baseUrl}}"],
"path": ["addSchool"]
}
},
"response": []
},
{
"name": "List Schools (near user)",
"request": {
"method": "GET",
"header": [],
"url": {
"raw": "{{baseUrl}}/listSchools?lat=28.6139&lng=77.2090",
"host": ["{{baseUrl}}"],
"path": ["listSchools"],
"query": [
{ "key": "lat", "value": "28.6139" },
{ "key": "lng", "value": "77.2090" }
]
}
},
"response": []
}
],
}
