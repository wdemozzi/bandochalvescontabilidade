import { createFileRoute } from "@tanstack/react-router";
import { CityPage } from "@/components/sections/CityPage";
import { cityBySlug } from "@/lib/site";
import { meta } from "@/lib/seo";

const city = cityBySlug("contabilidade-umuarama-pr");

export const Route = createFileRoute("/contabilidade-umuarama-pr")({
  head: () =>
    meta({ title: city.metaTitle, description: city.metaDescription, path: city.path }),
  component: () => <CityPage city={city} />,
});
