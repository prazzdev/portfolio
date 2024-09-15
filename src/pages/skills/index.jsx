import SkillList from "@/components/SkillList";
import HeadingTitle from "@/components/partials/HeadingTitle";
import DefaultLayout from "@/layouts/DefaultLayout";

export default function Skills() {
  return (
    <>
      <DefaultLayout pageTitle="Skills | Agung Prasetyo">
        <div className="flex flex-col px-6 py-6 pb-[4em] lg:px-[3em] lg:py-[5em]">
          <HeadingTitle text="Skills" />
          <SkillList />
        </div>
      </DefaultLayout>
    </>
  );
}
