// import { NextRequest, NextResponse } from "next/server";
// import { Resend } from "resend";
// import { products } from "@/app/data/products";

// const resend = new Resend(process.env.RESEND_API_KEY);

// type CartItem = {
//   id: number;
//   quantity: number;
// };

// export async function POST(req: NextRequest) {
//   try {
//     const items: CartItem[] = await req.json();

//     const purchasedProducts = items
//       .map((item) => {
//         const product = products.find((p) => p.id === item.id);

//         if (!product) return null;

//         return {
//           ...product,
//           quantity: item.quantity,
//         };
//       })
//       .filter((product): product is NonNullable<typeof product> => product !== null);

//     const total = purchasedProducts.reduce(
//       (sum, product) => sum + product.price * product.quantity,
//       0
//     );

//     const productHtml = purchasedProducts
//       .map(
//         (product) => `
//           <tr>
//             <td>${product.name}</td>
//             <td>${product.quantity}</td>
//             <td>$${product.price.toFixed(2)}</td>
//             <td>$${(product.price * product.quantity).toFixed(2)}</td>
//           </tr>
//         `
//       )
//       .join("");

//     await resend.emails.send({
//       from: "Football Store <onboarding@resend.dev>",
//       to: "kepchaldoupe@gmail.com", // Replace with your email
//       subject: "Order Confirmation ⚽",
//       html: `
//         <h1>Football Store</h1>

//         <p>Thank you for your purchase!</p>

//         <table
//           style="
//             width:100%;
//             border-collapse:collapse;
//             text-align:left;
//           "
//           border="1"
//           cellpadding="10"
//         >
//           <thead>
//             <tr>
//               <th>Product</th>
//               <th>Qty</th>
//               <th>Price</th>
//               <th>Total</th>
//             </tr>
//           </thead>

//           <tbody>
//             ${productHtml}
//           </tbody>
//         </table>

//         <h2>Total: $${total.toFixed(2)}</h2>

//         <p>We appreciate your order!</p>
//       `,
//     });

//     return NextResponse.json({ success: true });
//   } catch (error) {
//     console.error(error);

//     return NextResponse.json(
//       {
//         success: false,
//         message: "Failed to send email.",
//       },
//       { status: 500 }
//     );
//   }
// }