import { Button } from '@/components/ui';

export default function Home() {
  return (
    <div className="flex flex-col items-center pt-10">
      <h1 className="">Jira Cloned</h1>
      <div className="flex flex-col items-center gap-y-4">
        <Button variant="default">default</Button>
        <Button variant="secondary" className="btn">
          <h5>secondary</h5>
        </Button>
        <Button variant="accent">accent</Button>
        <Button variant="destructive">destructive</Button>
        <Button variant="ghost">ghost</Button>
        <Button variant="link">link</Button>
        <Button variant="outline">outline</Button>
      </div>
    </div>
  );
}
