# URL Shortener Service


## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies](#technologies)
- [Setup](#setup)
- [Usage](#usage)

## Introduction

Welcome to the URL Shortener Service project! This project provides a robust API for shortening URLs while offering features like click tracking, user authentication, and privacy-aware hashed URLs. It aims to handle long URLs efficiently, preserve query parameters, and enforce usage limits if needed. Whether you're integrating it into your own service or using it standalone, this project offers flexibility and security.

## Features

- **URL Shortening**: Shorten long URLs to unique, hashed URLs.
- **Click Tracking**: Track the number of clicks on each shortened URL.
- **User Authentication**: Secure endpoints with user authentication using JWT.
- **Privacy Aware**: Maintain privacy by hashing URLs while preserving their uniqueness.
- **Usage Limits**: Optionally limit the number of times a shortened URL can be used.

## Technologies

- **Node.js**: Backend environment
- **Express.js**: Web framework for Node.js
- **MongoDB**: Database for storing URLs and user data
- **Mongoose**: MongoDB object modeling for Node.js
- **Bcrypt**: Password hashing for user authentication
- **JSON Web Tokens (JWT)**: Secure authentication mechanism
- **Swagger**: API documentation

## Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/url-shortener.git
   cd url-shortener

## Usage

Start the repo locally
```bash
npm start
```

### Register a User

Endpoint: `POST /register`

Example:
  ```bash
  curl -X POST http://localhost:3000/register -d '{"username":"your-username","password":"your-password"}' -H "Content-Type: application/json"
```


## Login

**Endpoint:** `POST /login`

**Example:**

```bash
curl -X POST http://localhost:3000/login -d '{"username":"your-username","password":"your-password"}' -H "Content-Type: application/json"
```

## Shorten a URL

**Endpoint:** `POST /hash`

**Example:**

```bash
curl -X POST http://localhost:3000/hash -d '{"originalUrl":"https://example.com","usageLimit":5}' -H "Content-Type: application/json"
```
## Redirect to Original URL

**Endpoint:** `GET /:hash`

**Example:**

```bash
curl http://localhost:3000/abc123
```
API Documentation
Explore the API endpoints using SwaggerUI:

Local URL: http://localhost:3000/test

