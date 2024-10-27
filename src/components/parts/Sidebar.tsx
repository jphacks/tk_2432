'use client'
import { useState } from "react"
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { 
  ChevronLeft, 
  ChevronRight, 
  User, 
  Settings, 
  Home,
  HelpCircle, 
  LogOut 
} from 'lucide-react'

export default function Sidebar() {
  const [sidebar, setSidebar] = useState(false)
  const router = useRouter();

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  function toggleSidebar() {
    setSidebar(!sidebar)
  }

  return (
    <div className={`min-h-screen bg-gray-800 text-white transition-all duration-300 ${sidebar ? 'w-16' : 'w-64'}`}>
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-between p-4">
          <Avatar className={`w-8 h-8`}>
            <AvatarImage src="/placeholder-avatar.jpg" alt="User avatar" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => toggleSidebar()}
            aria-label={sidebar ? "Expand sidebar" : "Collapse sidebar"}
            className="text-white hover:bg-gray-700"
          >
            {sidebar ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
          </Button>
        </div>
        <nav className="flex-grow">
          <ul className="space-y-2 p-2">
            {[
              { icon: Home, label: 'Home', link: '/test' },
              { icon: User, label: 'Profile', link: '/profile' },
              { icon: Settings, label: 'Settings', link: '/settings' },
              { icon: HelpCircle, label: 'Help', link: '/help' },
            ].map((item, index) => (
              <li key={index}>
                <Button
                  onClick={() => handleNavigation(item.link)}
                  variant="ghost"
                  size={sidebar ? 'icon' : 'default'}
                  className={`w-full text-white hover:bg-gray-700 ${sidebar ? 'justify-center' : 'justify-start'}`}
                >
                  <item.icon className={`h-5 w-5 ${sidebar ? '' : 'mr-2'}`} />
                  {!sidebar && <span>{item.label}</span>}
                </Button>
              </li>
            ))}
          </ul>
        </nav>
        <div className="p-4">
          <Button
            variant="ghost"
            size={sidebar ? 'icon' : 'default'}
            className={`w-full text-white hover:bg-gray-700 ${sidebar ? 'justify-center' : 'justify-start'}`}
          >
            <LogOut className={`h-5 w-5 ${sidebar ? '' : 'mr-2'}`} />
            {!sidebar && <span>Logout</span>}
          </Button>
        </div>
      </div>
    </div>
  )
}