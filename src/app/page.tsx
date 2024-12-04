import { Button, Input } from '@/components/ui';

export default function Home() {
  return (
    <div className="flex flex-col items-center pt-10">
      <h1 className="mb-10">Jira Cloned</h1>
      <div className="flex flex-col items-center gap-y-4">
        <h2>BUTTONS</h2>
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
        <h2 className="mt-10">INPUT</h2>
        <Input placeholder="Test" />
      </div>
    </div>
  );
}
