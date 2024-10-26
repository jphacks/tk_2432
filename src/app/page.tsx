import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen p-20">
      <div className="grid justify-center">
        <div className="flex flex-col items-center">
          <p>JPHACKS2024 DEMO</p>
          <div className="h-px w-36 bg-gray-500"></div>
        </div>
        <div className="mt-16 flex flex-col items-center">
          <div className="flex w-96 h-fit bg-gray-800 rounded-lg">
            <div className="ml-1 min-w-1 bg-red-500"></div>
            <div className="p-2 text-white">
              <div className="flex items-center">
                <div className="w-6 h-6 rounded-full mr-1 bg-gray-500"></div>
                <p className="font-bold mr-1">Username</p>
                <p className="text-sm">@dummy_user</p>
              </div>
              <div className="mt-1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
              </div>
              <div className="">
                <Button variant="ghost" className="rounded-full h-6 w-6 px-1 py-1 mr-2">
                  R
                </Button>
                <Button variant="ghost" className="rounded-full h-6 w-6 px-1 py-1 mr-2">
                  G
                </Button>
                <Button variant="ghost" className="rounded-full h-6 w-6 px-1 py-1">
                  B
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
