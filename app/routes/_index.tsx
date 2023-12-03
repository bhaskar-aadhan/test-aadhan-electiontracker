import { useState, useEffect } from "react";
import type { MetaFunction } from "@remix-run/cloudflare";
import { Link } from "@remix-run/react";
import { aadhanBlackLogo } from "~/assets/images";

export const meta: MetaFunction = () => {
  return [
    { title: "Aadhan Election Tracker" },
    { name: "description", content: "Aadhan Media Short News App" },
  ];
};

export default function Index() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  //viewport finder logic
  // const [viewportWidth, setViewportWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);
  // const handleResize = () => {
  //   setViewportWidth(window.innerWidth);
  // };
  // useEffect(() => {
  //   if (typeof window !== 'undefined') {
  //     setViewportWidth(window.innerWidth);
  //     window.addEventListener('resize', handleResize);

  //     return () => {
  //       window.removeEventListener('resize', handleResize);
  //     }
  //   }
  // }, [])

  if (!mounted) {
    return null; // return this null to avoid hydration errors
  }
  return (
    <div className="min-h-screen w-full grid place-content-center">
      <div className="w-full mx-auto border-[1px] border-red-300 table__shadow rounded-md" style={{padding:'2rem'}}>
        <img src={aadhanBlackLogo} alt="aadhan logo" className="block mx-auto" />
        <div className="route-links-container my-5 flex flex-col justify-center items-start gap-2">
            <Link className="route-link text-blue-700 hover:text-blue-500 underline" to="/electionresults">Election Results</Link>
            <Link className="route-link text-blue-700 hover:text-blue-500 underline" to="/constituencyresults">Constituency Results</Link>
        </div>
      </div>
    </div>
  );
}
