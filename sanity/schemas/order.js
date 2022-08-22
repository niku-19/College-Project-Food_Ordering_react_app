export default {
  name: "order",
  Title: "Order",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      options: {
        maxLength: 40,
      },
    },

    {
      name: "phone",
      title: "Phone",
      type: "string",
      options: {
        maxLength: 15,
      },
    },
    {
      name: "landmark",
      title: "Landmark",
      type: "string",
      required: true,
      options: {
        maxLength: 100,
      },
    },
    {
      name: "address",
      title: "Address",
      type: "string",
      options: {
        maxLength: 100,
      },
    },
    {
      name: "method",
      title: "method",
      type: "number",
    },

    {
      name: "total",
      title: "Total",
      type: "number",
    },
    {
      name: "status",
      title: "Status",
      type: "number",
    },
  ],
};
