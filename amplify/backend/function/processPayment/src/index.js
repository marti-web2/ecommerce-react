exports.handler = async (event) => {
  try {
    const { id, cart, total, address, username, token } = event.arguments.input;
    const email = await getUserEmail(event);

    await stripe.charges.create({
      amount: total,
      currency: "usd",
      source: token,
      description: `Order ${id} - ${email}`,
    });
    return { id, cart, total, address, username, email };
  } catch (err) {
    throw new Error(err);
  }
};
