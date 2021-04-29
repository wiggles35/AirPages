import random

class CustomRouter:
    def db_for_read(self, model, **hints):
        """
        Return one of the replicas
        """
        return random.choice(['replica2', 'replica3', 'replica4', 'replica5'])

    def db_for_write(self, model, **hints):
        # Always return the default database
        return 'default'

    def allow_relation(self, obj1, obj2, **hints):
        return True

    def allow_migrate(self, db, app_label, model_name=None, **hints):
        return True
