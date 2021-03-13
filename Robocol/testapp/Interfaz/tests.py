from django.test import TestCase
from channels.testing import HttpCommunicator
from Interfaz.ConsumerFiles.Rover import sensors

# Create your tests here.
class SensorsTests(TestCase):
    async def test_my_consumer(self):
        communicator = HttpCommunicator(sensors.SensorsConsumer, "GET", "/ws/<tab_name>/")
        response = await communicator.get_response()
        self.assertEqual(response["text"], b"test response")
        self.assertEqual(response["status"], 200)
        print('C\'est fini')