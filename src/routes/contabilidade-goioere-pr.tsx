import { createFileRoute } from "@tanstack/react-router";
import { CityPage } from "@/components/sections/CityPage";
import { cityBySlug } from "@/lib/site";
import { meta } from "@/lib/seo";

const city = cityBySlug("contabilidade-goioere-pr");

export const Route = createFileRoute("/contabilidade-goioere-pr")({
  head: () =>
    meta({ title: city.metaTitle, description: city.metaDescription, path: city.path }),
  component: () => <CityPage city={city} />,
});
