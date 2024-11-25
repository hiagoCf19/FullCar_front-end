export async function uploadFile(file: File): Promise<string> {
  // Simulating file upload with a delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  return URL.createObjectURL(file);
}