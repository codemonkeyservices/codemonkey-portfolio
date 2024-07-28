// import { IoMdCheckmark } from "react-icons/io";
// import { RxCross2 } from "react-icons/rx";

// export default function OffersPage() {
//   return (
//     <div>
//       <div className="flex flex-col justify-center space-x-6 py-10">
//         <div className="grid grid-cols-3 gap-3">
//           {MonthlyPackages.map((d, index) => (
//             <div className="border rounded-lg p-6 max-w-xs shadow-lg">
//               <div className="text-center mb-6">
//                 <div className="text-lg font-semibold">
//                   <p>Monthly Web development</p>
//                   <p className="font-extrabold">{d.package}</p>
//                 </div>
//                 {/* <div className="text-3xl font-bold mt-2">
//                   <p>${d.price}</p>
//                 </div>
//                 <div className="text-sm">
//                   <p>
//                     This are estimated costs, contact our team for further
//                     details.
//                   </p>
//                 </div> */}
//               </div>
//               <button className="w-full blue-gradient text-white py-2 rounded mb-6 font-bold">
//                 Call us for more details
//               </button>
//               <ul className="space-y-3 text-sm">
//                 {d.services.map((d, index) => (
//                   <li
//                     className={`${
//                       d.available ? "text-black" : "text-gray-300 line-through"
//                     } flex items-center text-sm`}
//                   >
//                     {d.available ? (
//                       <span className="text-blue-500 mr-2">
//                         <IoMdCheckmark className="size-5" />
//                       </span>
//                     ) : (
//                       <span className="mr-2">
//                         <RxCross2 className="size-5" />
//                       </span>
//                     )}
//                     <p>{d.name}</p>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div>
//         <p className="text-center text-2xl font-extrabold blue-text-gradient">Need a Customized offer for your needs?</p>
//       </div>
//     </div>
//   );
// }

// const MonthlyPackages = [
//   {
//     package: "STANDARD",
//     price: "1200",
//     services: [
//       {
//         name: "Custom website development",
//         available: true,
//       },
//       {
//         name: "User Authentication",
//         available: true,
//       },
//       {
//         name: "Unlimited changes",
//         available: true,
//       },
//       {
//         name: "hosting and maintainance",
//         available: true,
//       },
//       {
//         name: "e-commerce",
//         available: false,
//       },
//       {
//         name: "Admin Panel",
//         available: false,
//       },
//       {
//         name: "Chat system",
//         available: false,
//       },
//       {
//         name: "Data Visualizing with graphs",
//         available: false,
//       },
//       {
//         name: "Graphic designing",
//         available: false,
//       },
//       {
//         name: "Chat bot",
//         available: false,
//       },
//     ],
//   },
//   {
//     package: "PRO",
//     price: "2500",
//     services: [
//       {
//         name: "Custom website development",
//         available: true,
//       },
//       {
//         name: "User Authentication",
//         available: true,
//       },
//       {
//         name: "Unlimited changes",
//         available: true,
//       },
//       {
//         name: "hosting and maintainance",
//         available: true,
//       },
//       {
//         name: "e-commerce",
//         available: true,
//       },
//       {
//         name: "Admin Panel",
//         available: true,
//       },
//       {
//         name: "Chat system",
//         available: false,
//       },
//       {
//         name: "Data Visualizing with graphs",
//         available: false,
//       },
//       {
//         name: "Graphic designing",
//         available: false,
//       },
//       {
//         name: "Chat bot",
//         available: false,
//       },
//     ],
//   },
//   {
//     package: "ULTRA",
//     price: "3200",
//     services: [
//       {
//         name: "Custom website development",
//         available: true,
//       },
//       {
//         name: "User Authentication",
//         available: true,
//       },
//       {
//         name: "Unlimited changes",
//         available: true,
//       },
//       {
//         name: "hosting and maintainance",
//         available: true,
//       },
//       {
//         name: "e-commerce",
//         available: true,
//       },
//       {
//         name: "Admin Panel",
//         available: true,
//       },
//       {
//         name: "Chat system",
//         available: true,
//       },
//       {
//         name: "Data Visualizing with graphs",
//         available: true,
//       },
//       {
//         name: "Graphic designing",
//         available: true,
//       },
//       {
//         name: "Chat bot",
//         available: true,
//       },
//     ],
//   },
// ];
