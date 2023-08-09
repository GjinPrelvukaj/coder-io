import { OrganizationSwitcher, SignOutButton, SignedIn } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

function RightSideBar() {
  return (
    <section className="curstom-scrollbar rightsidebar">
      <div className="flex flex-1 flex-col justify-start ">
        <h3 className="text-heading4-medium text-light-1">
          Explore Communities
        </h3>
      </div>
      <div className="flex flex-1 flex-col justify-start ">
        <h3 className="text-heading4-medium text-light-1">Explore Users</h3>
      </div>
    </section>
  );
}

export default RightSideBar;
