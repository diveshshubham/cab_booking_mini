# cab booking app

##

> user registers

```json
{
  "user": {
    "userName": "shubham divesh",
    "userMail": "divesh.shubham15@gmail.com",
    "userLocationX": 22.57757167745212,
    "userLocationY": 88.46979577454876,
    "userSearchDistance": 2,
    "_id": "62d9d6615f0065a8b154253d",
    "updatedAt": "2022-07-21T22:42:41.453Z",
    "createdAt": "2022-07-21T22:42:41.453Z",
    "__v": 0
  }
}
```

Authentication Required : No

This endpoint will registers a new user

### HTTP Request

`POST http://localhost:8086/user/register`

### Body Parameters

| Parameter          | Type   | Required | Description |
| ------------------ | ------ | -------- | ----------- |
| userName           | string | Yes      |             |
| userMail           | string | Yes      |             |
| userLocationX      | nuber  | Yes      |             |
| userLocationY      | number | Yes      |             |
| userSearchDistance | number | Yes      |             |

##

> user login

```json
{
  "user": {
    "_id": "62d9d455c8254a8bffe8d74c",
    "userName": "shubham divesh",
    "userMail": "divesh.shubham@gmail.com",
    "userLocationX": 22.57757167745212,
    "userLocationY": 88.46979577454876,
    "userSearchDistance": 2,
    "updatedAt": "2022-07-21T22:33:57.802Z",
    "createdAt": "2022-07-21T22:33:57.802Z",
    "__v": 0
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZDlkNDU1YzgyNTRhOGJmZmU4ZDc0YyIsImlhdCI6MTY1ODQ0MzI5OCwiZXhwIjoxNjg5OTc5Mjk4fQ.jaaqX6ZYsaLAEkBEYz2prpFprQy1gOiKMk2rANITEj0"
}
```

Authentication Required : No

This endpoint will login

### HTTP Request

`POST http://localhost:8086/user/login`

### Body Parameters

| Parameter | Type   | Required | Description |
| --------- | ------ | -------- | ----------- |
| email     | string | Yes      |             |

##

> driver registers

```json
{
  "data": {
    "driverName": "Mohan Lal Payarelal",
    "driverMail": "mohanlan@gmail.com",
    "driverLocX": 22.578800058231348,
    "driverLocY": 88.46563292502752,
    "geoLocation": {
      "type": "Point",
      "coordinates": [88.46563292502752, 22.578800058231348]
    },
    "isAvailable": true,
    "thresholdDistanceDriver": 5,
    "_id": "62d9d96c8bcb7b33691d337e",
    "updatedAt": "2022-07-21T22:55:40.648Z",
    "createdAt": "2022-07-21T22:55:40.648Z",
    "__v": 0
  }
}
```

Authentication Required : No

This endpoint will registers a new driver

### HTTP Request

`POST http://localhost:8086/driver/register`

### Body Parameters

| Parameter               | Type    | Required | Description |
| ----------------------- | ------- | -------- | ----------- |
| driverMail              | string  | Yes      |             |
| driverName              | string  | Yes      |             |
| driverLocX              | nuber   | Yes      |             |
| driverLocY              | number  | Yes      |             |
| lat                     | number  | Yes      |             |
| lng                     | number  | Yes      |             |
| isAvailable             | Boolean | Yes      |             |
| thresholdDistanceDriver | number  | Yes      |             |

##

> driver login

```json
{
  "driver": {
    "geoLocation": {
      "type": "Point",
      "coordinates": [88.4421551172235, 22.58438560180292]
    },
    "_id": "62d9da908bcb7b33691d3381",
    "driverName": "Pandey Lal",
    "driverMail": "pandelal@gmail.com",
    "driverLocX": 22.58438560180292,
    "driverLocY": 88.4421551172235,
    "isAvailable": true,
    "thresholdDistanceDriver": 1,
    "updatedAt": "2022-07-21T23:00:32.440Z",
    "createdAt": "2022-07-21T23:00:32.440Z",
    "__v": 0
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZDlkYTkwOGJjYjdiMzM2OTFkMzM4MSIsImlhdCI6MTY1ODQ0NDU4OSwiZXhwIjoxNjg5OTgwNTg5fQ.Vu_R_dpxPf66bBzjXwwXIk5P3SxazEHbZnNwtPcebdw"
}
```

Authentication Required : No

This endpoint will login driver

### HTTP Request

`POST http://localhost:8086/driver/login`

### Body Parameters

| Parameter  | Type   | Required | Description |
| ---------- | ------ | -------- | ----------- |
| driverMail | string | Yes      |             |

##

> user to find cab

```json
{
  "drivers": [
    {
      "geoLocation": {
        "type": "Point",
        "coordinates": [88.46563292502752, 22.578800058231348]
      },
      "_id": "62d9d96c8bcb7b33691d337e",
      "driverName": "Mohan Lal Payarelal",
      "driverMail": "mohanlan@gmail.com",
      "driverLocX": 21,
      "driverLocY": 85,
      "isAvailable": true,
      "thresholdDistanceDriver": 20,
      "updatedAt": "2022-07-21T22:55:40.648Z",
      "createdAt": "2022-07-21T22:55:40.648Z",
      "__v": 0
    },
    {
      "geoLocation": {
        "type": "Point",
        "coordinates": [88.4421551172235, 22.58438560180292]
      },
      "_id": "62d9da908bcb7b33691d3381",
      "driverName": "Pandey Lal",
      "driverMail": "pandelal@gmail.com",
      "driverLocX": 22.58438560180292,
      "driverLocY": 88.4421551172235,
      "isAvailable": true,
      "thresholdDistanceDriver": 1,
      "updatedAt": "2022-07-21T23:00:32.440Z",
      "createdAt": "2022-07-21T23:00:32.440Z",
      "__v": 0
    }
  ]
}
```

Authentication Required : Yes

This endpoint will get drivers within a user and driver's threshold limit

### HTTP Request

`POST http://localhost:8086/user/searchCab`

##

> driver starts trip

```json
{
  "data": {
    "userId": "62d9d5f0c168496ca053b405",
    "driverId": "62d9da908bcb7b33691d3381",
    "driverAcceptTime": "2022-07-22T03:06:13.620Z",
    "userDestination": "Biswa Bangla Gate",
    "userPickupX": 22.58438560180292,
    "fareCollected": 0,
    "userFeedback": "POOR",
    "driverFeedback": "POOR",
    "_id": "62da14252f400aed2c0d5e50",
    "updatedAt": "2022-07-22T03:06:13.628Z",
    "createdAt": "2022-07-22T03:06:13.628Z",
    "__v": 0
  }
}
```

Authentication Required : Yes

This endpoint will start a new trip by driver

### HTTP Request

`POST http://localhost:8086/driver/startTrip`

### Body Parameters

| Parameter       | Type   | Required | Description |
| --------------- | ------ | -------- | ----------- |
| userId          | string | Yes      |             |
| userDestination | string | Yes      |             |
| userPickupX     | nuber  | Yes      |             |
| userPickupY     | number | Yes      |             |

##

> driver ends trip

```json
{
  "data": {
    "_id": "62da1d911e7b5e3d9997e8a7",
    "userId": "62d9d5f0c168496ca053b405",
    "driverId": "62d9da908bcb7b33691d3381",
    "driverAcceptTime": "2022-07-22T03:46:25.380Z",
    "userDestination": "howrah",
    "userPickupX": 22.58438560180292,
    "userPickupY": 88.4421551172235,
    "fareCollected": 115,
    "userFeedback": "POOR",
    "driverFeedback": "BEST",
    "tripEndTime": "2022-07-22T03:51:43.106Z",
    "updatedAt": "2022-07-22T03:46:25.385Z",
    "createdAt": "2022-07-22T03:46:25.385Z",
    "__v": 0,
    "driverDropX": 22.60228704954579,
    "driverDropY": 88.5528754663195
  }
}
```

Authentication Required : Yes

This endpoint will start a new trip by driver

### HTTP Request

`PUT http://localhost:8086/driver/endTrip/{tripId}`

### Body Parameters

| Parameter      | Type   | Required | Description |
| -------------- | ------ | -------- | ----------- |
| tripId         | string | Yes      |             |
| driverDropX    | Number | Yes      |             |
| driverFeedback | String | Yes      |             |

### Path Parameters

| Parameter | Type   | Required | Description |
| --------- | ------ | -------- | ----------- |
| tripId    | string | Yes      |             |

##

> user ends trip

```json
{
  "data": {
    "_id": "62da1d911e7b5e3d9997e8a7",
    "userId": "62d9d5f0c168496ca053b405",
    "driverId": "62d9da908bcb7b33691d3381",
    "driverAcceptTime": "2022-07-22T03:46:25.380Z",
    "userDestination": "howrah",
    "userPickupX": 22.58438560180292,
    "userPickupY": 88.4421551172235,
    "fareCollected": 115,
    "userFeedback": "GOOD",
    "driverFeedback": "BEST",
    "tripEndTime": "2022-07-22T03:51:43.106Z",
    "updatedAt": "2022-07-22T03:46:25.385Z",
    "createdAt": "2022-07-22T03:46:25.385Z",
    "__v": 0,
    "driverDropX": 22.60228704954579,
    "driverDropY": 88.5528754663195
  }
}
```

Authentication Required : Yes

This endpoint will start a new trip by user

### HTTP Request

`PUT http://localhost:8086/user/endTrip/{tripId}`

### Body Parameters

| Parameter    | Type   | Required | Description |
| ------------ | ------ | -------- | ----------- |
| userFeedback | String | Yes      |             |

### Path Parameters

| Parameter | Type   | Required | Description |
| --------- | ------ | -------- | ----------- |
| tripId    | string | Yes      |             |

##

> user updates it's location

```json
{
  "data": {
    "_id": "62d9d455c8254a8bffe8d74c",
    "userName": "shubham divesh",
    "userMail": "divesh.shubham@gmail.com",
    "userLocationX": 22.598919720541513,
    "userLocationY": 88.46704572443765,
    "userSearchDistance": 1,
    "updatedAt": "2022-07-21T22:33:57.802Z",
    "createdAt": "2022-07-21T22:33:57.802Z",
    "__v": 0
  }
}
```

Authentication Required : Yes

This endpoint will update the user's loation

### HTTP Request

`PUT http://localhost:8086/user/update`

### Body Parameters

| Parameter          | Type   | Required | Description |
| ------------------ | ------ | -------- | ----------- |
| userLocationX      | Number | Yes      |             |
| userLocationY      | Number | Yes      |             |
| userSearchDistance | Number | Yes      |             |

##

> driver updates it's location

```json
{
  "data": {
    "geoLocation": {
      "coordinates": [22, 22],
      "type": "Point"
    },
    "_id": "62d9da908bcb7b33691d3381",
    "driverName": "Pandey Lal",
    "driverMail": "pandelal@gmail.com",
    "driverLocX": 22,
    "driverLocY": 22,
    "isAvailable": true,
    "thresholdDistanceDriver": 11,
    "updatedAt": "2022-07-21T23:00:32.440Z",
    "createdAt": "2022-07-21T23:00:32.440Z",
    "__v": 0
  }
}
```

Authentication Required : Yes

This endpoint will update the drive's loation

### HTTP Request

`PUT http://localhost:8086/driver/update`

### Body Parameters

| Parameter               | Type   | Required | Description |
| ----------------------- | ------ | -------- | ----------- |
| driverLocX              | Number | Yes      |             |
| driverLocY              | Number | Yes      |             |
| thresholdDistanceDriver | Number | Yes      |             |
| isAvailable             | Number | Yes      |             |
