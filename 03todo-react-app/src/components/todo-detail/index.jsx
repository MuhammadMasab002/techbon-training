// import { Dialog, DialogTitle, Button } from "@headlessui/react";
import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { Fragment } from "react";

function TodoDetails({
  todoDetails,
  openDialog,
  setOpenDialog,
  setTodoDetails,
}) {
  return (
    <>
      <Dialog
        className={
          "bg-blue-950 w-100 h-40 z-40 p-10 absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] flex justify-center items-center shadow-md shadow-amber-400"
        }
        onClose={() => setOpenDialog(false)}
        open={openDialog}
      >
        <DialogPanel>
            <p className="text-center">{todoDetails?.id}</p>
          <DialogTitle className="mt-3 text-center">{todoDetails?.todo}</DialogTitle>
          <div className="text-center">
            <Button
              className={
                "bg-red-600 text-white font-bold rounded-md mt-3 px-3 py-2 hover:cursor-pointer"
              }
              onClick={() => {
                setTodoDetails(null);
                setOpenDialog(false);
              }}
            >
              Close
            </Button>
          </div>
        </DialogPanel>
      </Dialog>
    </>
  );
}

export default TodoDetails;
