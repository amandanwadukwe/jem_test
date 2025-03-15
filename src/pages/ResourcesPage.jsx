import React from 'react';
import { Download } from 'lucide-react';
import Navbar from '../Components/Layout/Navbar';
import logopic from '../Components/images/pic1.png';
import Footer from '../Components/Footer';

const ResourcesPage = () => {
  const resources = [
    {
      id: 1,
      title: "Exclusion from maintained schools, academies and pupil referral units in England",
      description: "Statutory guidance for those with legal responsibilities in relation to exclusion. This document from the Department for Education provides a guide to the legislation that governs the exclusion of pupils from maintained schools, pupil referral units (PRUs), academy schools (including free schools, studio schools, and university technology colleges), and alternative provision academies (including alternative provision free schools) in England.",
      date: "The Department for Education, September 2017",
      color: "bg-pink-400",
      textColor: "text-white",
    },
    {
      id: 2,
      title: "Child sexual exploitation",
      description: "Definition and a guide for practitioners, local leaders and decision makers working to protect children from child sexual exploitation. This advice is non-statutory, and has been produced to help practitioners, local leaders and decision makers who work with children and families to identify child sexual exploitation and take appropriate action in response.",
      date: "The Department for Education, February 2017",
      color: "bg-yellow-300",
      textColor: "text-black",
    },
    {
      id: 3,
      title: "Elective home education",
      description: "Departmental guidance from the Department for Education. It is non-statutory, and has been produced to help parents understand their obligations and rights in relation to elective home education.",
      date: "The Department for Education, April 2019",
      color: "bg-emerald-200",
      textColor: "text-black",
    },
    {
      id: 4,
      title: "Exploring the issue of off-rolling",
      description: "Guidance on off-rolling.",
      date: "May 2019",
      color: "bg-purple-300",
      textColor: "text-black",
    },
    {
      id: 5,
      title: "Fair Access Protocols",
      description: "This non-statutory guidance provides advice on the effective operation of FAPs as set out in the Code, which comes into force on 1 September 2021.",
      date: "The Department for Education, August 2021",
      color: "bg-blue-300",
      textColor: "text-black",
    },
    {
      id: 6,
      title: "Keeping children safe in education 2021",
      description: "Statutory guidance for schools and colleges issued under multiple educational regulations in England.",
      date: "The Department for Education, September 2021",
      color: "bg-teal-400",
      textColor: "text-white",
    },
    {
      id: 7,
      title: "School Admission Appeals Code",
      description: "Statutory guidance for school leaders, governing bodies and local authorities. This Code applies to admission appeals for all maintained schools in England.",
      date: "The Department for Education, February 2012",
      color: "bg-orange-300",
      textColor: "text-black",
    },
    {
      id: 8,
      title: "School Admissions Code",
      description: "Mandatory requirements and statutory guidance for admission authorities and panels in England.",
      date: "The Department for Education, September 2021",
      color: "bg-red-300",
      textColor: "text-black",
    },
    {
      id: 9,
      title: "School attendance parental responsibility measures",
      description: "Statutory guidance for local authorities, school leaders, and the police.",
      date: "The Department for Education, January 2015",
      color: "bg-indigo-400",
      textColor: "text-white",
    },
    {
      id: 10,
      title: "School Exclusion and Reintegration",
      description: "An exploration of pupils', parents', and teachers' experiences.",
      date: "Stephanie Lally, 2013",
      color: "bg-gray-300",
      textColor: "text-black",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12 mb-10 ">
      <Navbar />

     

      <div className="mb-16 overflow-hidden">
        <div className="p-8">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-10             text-center">Articles</h1>
          <p className="text-center text-gray-600 max-w-3xl mx-auto text-base leading-relaxed">
            We maintain a gallery of articles, news, and updates relevant to our work and broader educational reform. Consider going through our library to stay informed about new developments and campaigns.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {resources.map((resource) => (
          <div
            key={resource.id}
            className={`${resource.color} rounded-2xl p-6 flex flex-col justify-between shadow-lg hover:shadow-xl transition-shadow duration-300 min-h-[280px]`}
          >
            <div>
              <h3 className={`${resource.textColor} text-xl font-semibold mb-3`}>{resource.title}</h3>
              <p className={`${resource.textColor} text-sm opacity-90 mb-4`}>{resource.description}</p>
              <p className={`${resource.textColor} text-sm`}>{resource.date}</p>
            </div>
            <div className="flex justify-between items-center mt-4 ">
              <div className="flex -space-x-2">
                <img
                  src={logopic}
                  alt="Avatar"
                  className="w-8 h-8 rounded-full border-2 border-white"
                />
              </div>
              <button
                className={`${resource.color === "bg-white" ? "text-gray-600" : "text-white"} hover:opacity-75 transition-opacity flex items-center`}
              >
                <Download className="w-5 h-5 mr-1" />
                Download
              </button>
            </div>
          </div>
        ))}
      </div>
      <Footer />
     
    </div>
    
  );
};

export default ResourcesPage;
