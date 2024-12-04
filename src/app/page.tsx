import { Button } from '@/components/ui';

export default function Home() {
  return (
    <div className="flex flex-col items-center pt-10">
      <h1 className="">Jira Cloned</h1>
      <div className="flex flex-col items-center gap-y-4">
        <Button>default</Button>
        <Button size="lg" variant="secondary" className="">
          secondary
        </Button>
        <Button size="xs" variant="accent">
          accent
        </Button>
        <Button variant="destructive">destructive</Button>
        <Button variant="ghost">ghost</Button>
        <Button variant="muted">muted</Button>
        <Button disabled variant="disabled">
          disabled
        </Button>
        <Button variant="outline">outline</Button>
      </div>
    </div>
  );
}
