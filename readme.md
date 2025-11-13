📦 Empire Events – Full AWS Deployment (S3 + CloudFront + Elastic Beanstalk + RDS MySQL)

A complete cloud-hosted E-Commerce platform deployed on Amazon Web Services.

🚀 Project Overview

Empire Events is a cloud-native E-Commerce web application deployed using a modern, production-ready AWS architecture.
It follows a three-tier design:

Frontend: HTML, CSS, JavaScript (Hosted on S3 + CloudFront)

Backend: Node.js API (Hosted on Elastic Beanstalk)

Database: Amazon RDS (MySQL)

The goal of the project is to demonstrate real-world AWS cloud deployment used by companies for scalable web applications.

🏗️ Architecture
User → CloudFront CDN
          ↓
     Amazon S3 (Static Frontend)
          ↓
Elastic Beanstalk (Node.js Backend)
          ↓
      Amazon RDS MySQL


🎯 Region: us-east-1
🎯 Includes Public Subnets (for EB) & Private Subnets (for RDS)

🔧 Technologies Used
Frontend

HTML5

CSS3

JavaScript

Backend

Node.js

Express.js

AWS Services

Amazon S3

Amazon CloudFront

Elastic Beanstalk

Amazon RDS (MySQL)

EC2 (via EB)

IAM

VPC Networking

🛠️ Step-by-Step Deployment
1. Create RDS MySQL
2. Deploy Backend on Elastic Beanstalk
3. Deploy Frontend to S3
4. Add CloudFront CDN

🧪 Testing the Application
Test 1: Frontend loads

✔ CloudFront URL opens website

Test 2: Backend API works

✔ /products returns JSON

Test 3: Database connection

✔ Products displayed from RDS

🎯 Final Result

Your Empire Events project is:

✔ Fully deployed on AWS
✔ Secure & scalable
✔ Uses real cloud infrastructure
✔ Follows 3-tier architecture
