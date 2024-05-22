import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList
  } from "@/components/ui/navigation-menu"


  export default function TopNavBar() {
    /****
     * Schadcn redirects back to radix for any info related to navbar
     * https://www.radix-ui.com/primitives/docs/components/navigation-menu#list
     */
    //https://www.radix-ui.com/primitives/docs/components/navigation-menu
    return (
        <NavigationMenu>
            <NavigationMenuList className="">
                <div className="flex space-x-4">
                    <NavigationMenuItem>
                        Home
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink onClick={()=>console.log("page one")}>
                            Page 1
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        Page 2
                    </NavigationMenuItem>
                </div>
      
                <NavigationMenuItem className="pl-auto">
                    <svg width="50" height="50" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="25" cy="25" r="15" stroke="black" fill="transparent" strokeWidth="2"/>
                    </svg>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
 }
