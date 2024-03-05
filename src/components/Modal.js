const Modal = ({ closeModal }) => {
  return (
    <div className="fixed inset-0 z-10 flex items-center justify-center">
      <div className="bg-white p-4 rounded-md shadow-md">
        <p>Form submitted successfully! Thank you.</p>
        <button
          onClick={closeModal}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
