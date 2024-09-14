import ProjectList from "@/components/ProjectList";
import HeadingTitle from "@/components/partials/HeadingTitle";
import DefaultLayout from "@/layouts/DefaultLayout";

export default function Projects() {
  return (
    <>
      <DefaultLayout pageTitle="Projects | Agung Prasetyo">
        <div className="flex flex-col px-6 py-6 pb-12 lg:p-0">
          <HeadingTitle text="Projects" />
          <ProjectList />
        </div>
      </DefaultLayout>
    </>
  );
}
