import sub from "date-fns/sub/index";
import React, { useState, useEffect } from "react";
import { findUserByUsername } from "../apis/users.api";
import UserItem from "../components/userItem";
import useAuthContext from "../context/useAuthContext";
import { useForm } from "../hooks/useForm";
import {
  addContactChangeErrors,
  addContactSubmitErrors,
} from "../utils/errors/addContactErrors";
const AddContactPage = () => {
  const { user } = useAuthContext();

  const { formData, handleChange, handleSubmit, submited, restartSubmit } =
    useForm(
      {
        username: "",
      },
      addContactChangeErrors,
      addContactSubmitErrors
    );

  const [contactsFinded, setContactsFinded] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    (async () => {
      if (submited) {
        /* find user*/
        setLoading(true);
        const userData = await findUserByUsername(
          formData.username,
          user.token
        );
        if (!userData.success) {
          /* show message error */
          setLoading(false);
          return;
        }

        setContactsFinded(userData.data);
        setLoading(false);
        restartSubmit();
      }
    })();
  }, [submited]);

  return (
    <div className="h-full flex flex-col items-center">
      <section className="mt-20 w-11/12 min-h-[20rem] bg-gray-800 flex flex-col items-center rounded-2xl">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <h2 className="text-white text-center font-semibold font-mono text-4xl my-4">
            Add a new contact
          </h2>
          <div className="flex items-center">
            <input
              placeholder="add contact username"
              type="text"
              name="username"
              onChange={handleChange}
              value={formData.username}
              className="outline-none p-2 rounded-md bg-white"
            />
            <i
              onClick={handleSubmit}
              className="ml-4 text-4xl ri-send-plane-2-fill text-white cursor-pointer"
            ></i>
          </div>
        </form>
        {loading ? (
          <p className="text-white">Loading...</p>
        ) : (
          <>
            {!contactsFinded ? (
              ""
            ) : (
              <>
                {!contactsFinded.length ? (
                  <p className="font-mono font-semobild text-3xl text-white my-10">
                    Not users found
                  </p>
                ) : (
                  <ul className="w-full my-10 h-full overflow-y-scroll">
                    {contactsFinded.map((contact) => (
                      <UserItem key={contact._id} data={contact} />
                    ))}
                  </ul>
                )}
              </>
            )}
          </>
        )}
      </section>
    </div>
  );
};

export default AddContactPage;
