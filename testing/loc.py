#!/usr/bin/env python3

import time
from locust import HttpUser, between, task

class QuickstartUser(HttpUser):
    wait_time = between(1, 2)

    @task
    def get_users(self):
        self.client.get('/api/user/', timeout=2)
    @task
    def get_user(self):
        self.client.get('/api/user/1/', timeout=2)

    @task
    def get_postings(self):
        self.client.get('/api/posting/', timeout=2)

    @task
    def get_user_posting(self):
        self.client.get('/api/user/1/posting/', timeout=2)

    '''
    @task
    def get_posting(self):
        self.client.get('/api/posting/26/', timeout=2)
    '''
    
    @task
    def post_user(self):
        self.client.post('/api/user/', {'first_name': 'test', 'last_name': 'user', 'email': 'testuser@gmail.com', 'address': '123 Bulla Road'}, timeout=2)

    @task
    def put_user(self):
        self.client.put('/api/user/2/', {'first_name': 'modified', 'last_name': 'modified', 'email': 'put@nd.edu', 'address': '1028 Cedar St'}, timeout=2)
