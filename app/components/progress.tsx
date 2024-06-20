interface ProgressProps {
  activated: boolean
}
const Progress = ({ activated }: ProgressProps) => {
  return (
    <div className={`${activated ? 'bg-primary' : 'bg-muted'} w-5 h-1 mx-1`} />
  );
}

export default Progress;