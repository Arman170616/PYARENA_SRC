import { Button } from "@/components/ui/button"

export default function CourseDetailsPage({ params }: { params: { slug: string } }) {
  // In a real application, you would fetch the course details based on the slug
  const course = {
    name: "Python Fundamentals",
    description: "Learn the basics of Python programming",
    price: 49.99,
    duration: "6 weeks",
    instructor: "John Doe",
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">{course.name}</h1>
      <p className="text-xl mb-4">{course.description}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Course Details</h2>
          <ul className="space-y-2">
            <li>
              <strong>Duration:</strong> {course.duration}
            </li>
            <li>
              <strong>Instructor:</strong> {course.instructor}
            </li>
            <li>
              <strong>Price:</strong> ${course.price}
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">What You'll Learn</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Python syntax and data types</li>
            <li>Control structures and functions</li>
            <li>Object-oriented programming in Python</li>
            <li>Working with files and modules</li>
          </ul>
        </div>
      </div>
      <div className="mt-8">
        <Button size="lg">Enroll Now</Button>
      </div>
    </div>
  )
}

