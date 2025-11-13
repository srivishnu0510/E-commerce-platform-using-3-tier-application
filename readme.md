🌐 Empire Events – AWS Cloud Deployment

Complete Cloud-Based E-Commerce Platform built using Amazon Web Services (AWS)

🚀 Project Overview
Empire Events is a 3-tier cloud application deployed on AWS, designed to simulate a real production-level architecture used by modern companies.
This project demonstrates:
Static hosting on Amazon S3
Global delivery using CloudFront
Node.js backend hosted on Elastic Beanstalk
MySQL database running on Amazon RDS
Secure VPC networking and IAM roles
End-to-end deployment and integration

🏗️ Architecture Diagram

User → CloudFront CDN
          ↓
     Amazon S3 (Frontend)
          ↓
Elastic Beanstalk (Node.js API)
          ↓
      Amazon RDS MySQL


🛠️ Deployment Steps

1️⃣ Create RDS MySQL
2️⃣ Deploy Backend on Elastic Beanstalk
3️⃣ Deploy Frontend on S3
4️⃣ Create CloudFront Distribution

🧪 Testing

✔ Frontend loads through CloudFront
✔ API returns JSON (/products)
✔ RDS data loads on webpage
✔ Backend → RDS connection successful

🎯 Skills Demonstrated

AWS S3 Hosting
CloudFront CDN
Elastic Beanstalk Deployment
Connecting Node.js API to RDS
SQL Database Operations
IAM Roles & Security Groups
VPC Networking
End-to-end cloud integration
