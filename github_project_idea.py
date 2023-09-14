
```python
import random

class FreelanceGraphicDesigner:
    def __init__(self, name, skills, hourly_rate):
        self.name = name
        self.skills = skills
        self.hourly_rate = hourly_rate

    def calculate_project_cost(self, project_duration):
        return self.hourly_rate * project_duration

    def generate_artwork(self, client_name):
        artwork = f"Artwork for {client_name}: "

        for skill in self.skills:
            design_element = random.choice(skill["design_elements"])
            color = random.choice(skill["colors"])
            artwork += f"{design_element} ({color}), "

        artwork = artwork.rstrip(", ")
        return artwork


# Example usage:
designer = FreelanceGraphicDesigner("John Doe", [
    {"design_elements": ["Abstract shapes", "Clean lines", "Minimalist typography"],
     "colors": ["Blue", "Yellow", "Green"]},
    {"design_elements": ["Watercolor textures", "Hand-drawn illustrations"],
     "colors": ["Pastel", "Neutral"]},
    {"design_elements": ["Geometric patterns", "Bold typography"],
     "colors": ["Black", "Red", "White"]}
], 50)

project_duration = 10
project_cost = designer.calculate_project_cost(project_duration)
print(f"Project cost: ${project_cost}")

client_name = "ABC Company"
artwork = designer.generate_artwork(client_name)
print(artwork)
```

This code represents a FreelanceGraphicDesigner class, which provides functionality for a freelance graphic designer, such as calculating project costs and generating artwork for clients based on their design preferences.
