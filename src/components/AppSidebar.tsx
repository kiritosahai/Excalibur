
import React from "react";
import { Link } from "react-router-dom";
import { 
  Sidebar, 
  SidebarContent, 
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent
} from "@/components/ui/sidebar";
import { 
  Leaf, 
  ImagePlus, 
  Microscope, 
  LineChart, 
  BookOpen, 
  Users, 
  LogIn, 
  UserPlus
} from "lucide-react";

const AppSidebar = () => {
  return (
    <Sidebar variant="floating" className="border-r border-border">
      <SidebarHeader className="py-4">
        <Link to="/" className="flex items-center space-x-2 px-4">
          <Leaf className="w-6 h-6 text-plantguard-green" />
          <span className="text-xl font-serif font-semibold">PlantGuard</span>
        </Link>
      </SidebarHeader>
      
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="Identification">
                  <Link to="/plant-identification">
                    <ImagePlus className="h-4 w-4" />
                    <span>Identification</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="Diagnosis">
                  <Link to="/disease-diagnosis">
                    <Microscope className="h-4 w-4" />
                    <span>Diagnosis</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="Monitoring">
                  <Link to="/monitoring">
                    <LineChart className="h-4 w-4" />
                    <span>Monitoring</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="Encyclopedia">
                  <Link to="/plant-encyclopedia">
                    <BookOpen className="h-4 w-4" />
                    <span>Encyclopedia</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="Community">
                  <Link to="/community">
                    <Users className="h-4 w-4" />
                    <span>Community</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        
        <SidebarGroup>
          <SidebarGroupLabel>Account</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="Sign In">
                  <Link to="/sign-in">
                    <LogIn className="h-4 w-4" />
                    <span>Sign In</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="Sign Up">
                  <Link to="/sign-up">
                    <UserPlus className="h-4 w-4" />
                    <span>Get Started</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      
      <SidebarFooter className="py-4 px-4 text-xs text-muted-foreground">
        <p>© 2025 PlantGuard</p>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
