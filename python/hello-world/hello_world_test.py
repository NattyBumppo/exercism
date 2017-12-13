import unittest
import hello_world

# Tests adapted from `problem-specifications//canonical-data.json` @ v1.0.0

class HelloWorldTests(unittest.TestCase):
    def test_hello(self):
        self.assertEqual(hello_world.hello(), 'Hello, World!')
    def test_hello_with_name(self):
        self.assertEqual(hello_world.hello('Nat'), 'Hello, Nat!')

if __name__ == '__main__':
    unittest.main()
