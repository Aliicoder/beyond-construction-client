import Modal from "@/components/shared/Modal";

export default function Page({ params }: { params: { id: string } }) {
  return (
    <Modal>
      <h1>Modal</h1>
    </Modal>
  );
}
