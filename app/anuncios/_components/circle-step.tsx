interface CircleStepProps {
  current: number;
}
const CircleStep = ({ current }: CircleStepProps) => {
  return (<div className="rounded-full bg-muted-foreground/20 size-6 text-primary/50 dark:text-zinc-50/30 flex justify-center items-center text-lg">{current}</div>);
}

export default CircleStep;