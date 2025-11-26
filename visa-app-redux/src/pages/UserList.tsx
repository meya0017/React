// // Users.tsx
// import React, { useEffect, useState } from "react";

//import React, { useEffect, useState } from "react"

// interface User {
//   id: number;
//   name: string;
//   username?: string;
//   email: string;
//   phone: string;
//   // add other fields you expect from the API if needed
//   // address?: { street: string; city: string; ... }
// }

// export const Users: React.FC = () => {
//   const [users, setUsers] = useState<User[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const controller = new AbortController();
//     const signal = controller.signal;

//     async function fetchUsers() {
//       try {
//         setLoading(true);
//         setError(null);

//         const res = await fetch("https://jsonplaceholder.typicode.com/users", {
//           signal,
//         });
//         if (!res.ok) {
//           throw new Error(`HTTP error: ${res.status}`);
//         }

//         const data: User[] = await res.json();
//         setUsers(data);
//       } catch (err) {
//         if ((err as DOMException).name === "AbortError") {
//           // fetch aborted — do nothing
//           return;
//         }
//         setError((err as Error).message ?? "An unknown error occurred");
//       } finally {
//         setLoading(false);
//       }
//     }

//     fetchUsers();

//     return () => {
//       controller.abort();
//     };
//   }, []); // run once on mount

//   if (loading) return <div>Loading…</div>;
//   if (error) return <div>Error: {error}</div>;

//   return (
//     <div>
//       {users.map((u) => (
//         <p key={u.id}>
//         {u.name}{u.phone}
//          {u.email} 
//         </p>
//       ))}
//     </div>
//   );
// };

// export default Users;






// import React , { useState, useEffect } from "react"

// const UserList: React.FC = () => {
//     const [count, setCount] = useState(0);

//     useEffect(() => {
//         console.log("useEffect runs after every render");
//     },[]);

//     return (
//         <div>
//         <h2>Count: {count}</h2>
//         <button onClick={() => setCount(count + 1)}>Click Me</button>
//         </div>
//     );
// };

// export default UserList






// import React, { useState, useEffect } from "react";

// const UserList: React.FC = () => {
//   const [name, setName] = useState("John");

//   useEffect(() => {
//     console.log("Name changed:", name);
//   }, [name]);

//   return (
//     <div>
//       <input value={name} onChange={(e) => setName(e.target.value)} />
//     </div>
//   );
// };

// export default UserList;



import React, { useState, useEffect } from "react";

// Define an interface
interface Person {
  name: string;
  age: number;
  email:string
  isAdmin?: boolean; // optional
}

// Use the interface
const Person: Person = {
  name: "Meya",
  age: 21,
  email: "meya0011@gmail.com",
};






const UserList: React.FC = () => {
  const [width, setWidth] = useState(100);
  const [height, setHeight] = useState(100);

  useEffect(() => {
    console.log(`Width or Height changed: ${width}x${height}`);
  }, [width,height]);


//    function join(a: number, b: number): number {
//      return a + b;
//    }

    // function joinFirstNameAndLastName(firstName: string, lastName: string): void {
    //   console.log(firstName + " " + lastName); 
    // }
    
   
     


  return (
    <div>
      <button onClick={() => setWidth(width + 10)}>Increase Width</button>
      <br />
      <button onClick={() => setHeight(height + 10)}>Increase height</button>
      <br />
       {Person.name}{Person.age}{Person.email}
    </div>
  );
};

export default UserList;








