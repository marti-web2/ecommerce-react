<!DOCTYPE html>
<html>
  <head>
    <title>Online Bookstore</title>
  </head>
  <body>
    <h1>Welcome to our Online Bookstore</h1>
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/books">Books</a></li>
        <li><a href="/cart">Cart</a></li>
        <li><a href="/checkout">Checkout</a></li>
        <li><a href="/admin" style="display:none;">Admin</a></li>
      </ul>
    </nav>
    <h2>Home</h2>
    <p>On our homepage, you can view our featured books or browse our collections.</p>
    <h2>Books</h2>
    <p>In the books section, you can see all the books we have available for purchase. Each book includes the title, description, author, and price.</p>
    <h2>Cart</h2>
    <p>In the cart section, you can review the books you've added and adjust the quantity before checking out.</p>
    <h2>Checkout</h2>
    <p>In order to checkout, you must be logged in. If you do not have an account, you can sign up on the checkout page. During checkout, you will be prompted to provide your shipping address and credit card information.</p>
    <h2>Admin</h2>
    <p>The admin section is a hidden link that directs you to a sign in page where you can add new books to the store. You can give the book a title, description, author, and price. You also have the option to mark the book as featured. The frontend of this project is built using React. The backend is powered by AWS, using Amplify, AppSync, and Cognito for authentication and CRUD operations. The pipeline resolver is built to process payments through Stripe. After a successful checkout, the create order lambda takes over and creates an AmazonDB table. Contributor to this project is @martimcdee, his name is a link to his linkedin profile: <a href="https://www.linkedin.com/in/david-martinez-a693b165/">https://www.linkedin.com/in/david-martinez-a693b165/</a></p>
    <p>Used technologies:</p>
    <ul>
      <li><a href="https://aws.amazon.com/">AWS</a></li>
      <li><a href="https://reactjs.org/">React</a></li>
      <li><a href="https://stripe.com/">Stripe</a></li>
    </ul>
  </body>
</html>