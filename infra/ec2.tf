terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "5.67.0"
    }
  }
}

variable "key_name" {
  description = "The name of the key pair to be used for the EC2 instance"
  type        = string
}

provider "aws" {
  region = "us-east-1"
}

# Define an EC2 instance resource with specific attributes
resource "aws_instance" "my_ec2" {
  ami                    = "ami-0b947c5d5516fa06e" # ARM Architecture
  instance_type          = "t4g.nano"
  key_name               = var.key_name
  vpc_security_group_ids = [aws_security_group.ec2_sg.id]
  tags = {
    Name = "MyEC2Instance"
  }
}

# Define a security group to allow access to port 8090
resource "aws_security_group" "ec2_sg" {
  name        = "ec2_sg"
  description = "Allow Internet access"

  # Expose port 80 to incoming traffic
  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  # Allow connecting on port 22 for SSH
  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  # Allow all outbound traffic
  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

# Output the public IP address of the EC2 instance
output "instance_ip_addr" {
  value = aws_instance.my_ec2.public_ip
}

# Output the SSH settings to connect to the EC2 instance
output "ssh" {
  value = "ssh -i ~/.ssh/${var.key_name}.pem ec2-user@${aws_instance.my_ec2.public_dns}"
}

# Public DNS (for SSH)
output "ssh_address" {
  value = aws_instance.my_ec2.public_dns
}
