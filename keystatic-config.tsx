import { config, collection, fields } from "@keystatic/core";

export default config({
  storage: {
    kind: "local",
  },
  collections: {
    posts: collection({
      label: "Posts",
      getItemSlug: (data) => data.slug,
      schema: {
        title: fields.text({ label: "Title" }),
        slug: fields.text({
          label: "Slug",
          validation: { length: { min: 4 } },
        }),
        publishDate: fields.date({ label: "Publish Date" }),
        heroImage: fields.image({ label: "Hero Image" }),
        content: fields.document({
          label: "Content",
          formatting: true,
          dividers: true,
          links: true,
        }),
        authors: fields.array(
          fields.object({
            name: fields.text({ label: "Name" }),
            bio: fields.document({ label: "Bio" }),
          }),
          { label: "Authors", itemLabel: (props) => props.fields.name.value }
        ),
      },
    }),
  },
});
