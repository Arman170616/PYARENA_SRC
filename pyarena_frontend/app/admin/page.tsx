import { redirect } from "next/navigation"

// This is a placeholder for actual authentication logic
const isAdmin = false

export default function AdminPage() {
  // In a real application, you would check the user's session or token
  if (!isAdmin) {
    redirect("/")
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-primary/10 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Total Users</h2>
          <p className="text-3xl font-bold">1,234</p>
        </div>
        <div className="bg-primary/10 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Active Courses</h2>
          <p className="text-3xl font-bold">42</p>
        </div>
        <div className="bg-primary/10 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Revenue</h2>
          <p className="text-3xl font-bold">$12,345</p>
        </div>
      </div>
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Recent Activities</h2>
        <ul className="space-y-2">
          <li>New user registered: John Doe</li>
          <li>Course completed: Python Fundamentals</li>
          <li>New course added: Advanced Machine Learning</li>
        </ul>
      </div>
    </div>
  )
}

