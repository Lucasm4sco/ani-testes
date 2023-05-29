from dotenv import load_dotenv
import os
import psycopg2


class ConnectDB:
    def __init__(self) -> None:
        load_dotenv()
        self.NAME_DB = os.getenv('DB_NAME')
        self.HOST_DB = os.getenv('DB_HOST')
        self.USER_DB = os.getenv('DB_USER')
        self.PASS_DB = os.getenv('DB_PASSWORD')

    def get_connection(self):
        print(self.NAME_DB,self.HOST_DB,self.USER_DB,self.PASS_DB,)
        conn = psycopg2.connect(
            dbname=self.NAME_DB,
            host=self.HOST_DB,
            user=self.USER_DB,
            password=self.PASS_DB
        )
        return conn

    def execute_query(self, query):
        conn = self.get_connection()
        cursor = conn.cursor()
        cursor.execute(query)
        results = cursor.fetchall()
        cursor.close()
        conn.close()
        return results

    
