import { Button } from "@/components/ui/button"
import { FaGoogle } from "react-icons/fa"

export default function LoginPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Login or Register</h1>
        <Button className="w-full" size="lg">
          <FaGoogle className="mr-2" />
          Continue with Google
        </Button>
      </div>
    </div>
  )
}

