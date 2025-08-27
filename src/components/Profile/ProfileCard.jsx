'use client'
import React, { useContext, useState } from 'react'
import { UserContext } from "../../context/UserContext.js"
import { FaCamera } from "react-icons/fa"

const ProfileCard = () => {
  const { user, setUser } = useContext(UserContext)

  const [edit, setEdit] = useState(false)

  const [form, setForm] = useState({
    username: user?.username || "",
    email: user?.email || "",
    fullName: user?.fullName || "",
    createdAt: user?.createdAt || "",
    updatedAt: user?.upatedAt || "",
    avatar: user?.avatar || "",
    coverImage: user?.coverImage || "",
  })

  const [settings, setSettings] = useState({
    emailFollow: true,
    emailAnswer: false,
    emailMention: true,
    launches: false,
    updates: true,
    newsletter: true,
  })

  // Handle input change
  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  // Handle settings toggle
  const handleToggle = key => {
    setSettings(s => ({ ...s, [key]: !s[key] }))
  }

  // Handle save
  const handleSave = () => {
    setUser({ ...user, ...form })
    setEdit(false)
  }

  return (
  <div className=" px-4 pb-20 opacity-100  ">
     
      <div className=" justify-center flex  rounded-2xl overflow-hidden   shadow-lg  ">
       {form.coverImage &&(
        <div className=' w-full h-full absolute  not-dark:invert '>

          <img
            src={form.coverImage || ""}
            alt="Cover"
            className="object-cover w-screen h-full  -z-0 opacity-30 not-dark:hue-rotate-180 "
          />
        </div>
       ) }

    
        {edit && (
          <label className="absolute top-4 right-4 bg-[#e3eafe] dark:bg-[#23235b] p-2 rounded-full cursor-pointer shadow  ">
            <FaCamera className="text-[#7b2ff2] dark:text-[#7b2ff2]" />
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={e => {
                const file = e.target.files[0]
                if (file) {
                  const url = URL.createObjectURL(file)
                  setForm(f => ({ ...f, cover: url }))
                }
              }}
            />
          </label>
        )}
      </div>

      {/* Profile Card */}
      <div className="max-w-4xl mx-auto mt-30  bg-white dark:bg-[#23235b] rounded-2xl shadow-xl opacity-90 backdrop-opacity-35 flex flex-col md:flex-row items-center p-8 gap-8">
        {/* Avatar */}
        <div className="relative">
          <img
            src={form.avatar || "/default-avatar.jpg"}
            alt="Avatar"
            className="w-32 h-32 rounded-full border-4 border-[#e3eafe] dark:border-[#7b2ff2] object-cover shadow"
          />
          {edit && (
            <label className="absolute bottom-2 right-2 bg-[#e3eafe] dark:bg-[#23235b] p-2 rounded-full cursor-pointer shadow">
              <FaCamera className="text-[#7b2ff2] dark:text-[#7b2ff2]" />
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={e => {
                  const file = e.target.files[0]
                  if (file) {
                    const url = URL.createObjectURL(file)
                    setForm(f => ({ ...f, avatar: url }))
                  }
                }}
              />
            </label>
          )}
        </div>

        {/* Info */}
        <div className="flex-1 flex flex-col opacity-80 backdrop-opacity-40 gap-2">
          {edit ? (
            <>
              <input
                name="username"
                value={form.username}
                onChange={handleChange}
                className="font-bold text-2xl bg-[#e3eafe] dark:bg-[#23235b] text-[#23235b] dark:text-white rounded px-3 py-1 mb-2"
                placeholder="Username"
              />
              <input
                name="bio"
                value={form.bio}
                onChange={handleChange}
                className="bg-[#e3eafe] dark:bg-[#23235b] text-[#23235b] dark:text-white rounded px-3 py-1 mb-2"
                placeholder="Bio"
              />
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                className="bg-[#e3eafe] dark:bg-[#23235b] text-[#23235b] dark:text-white rounded px-3 py-1 mb-2"
                placeholder="Email"
              />
              <input
                name="location"
                value={form.location}
                onChange={handleChange}
                className="bg-[#e3eafe] dark:bg-[#23235b] text-[#23235b] dark:text-white rounded px-3 py-1 mb-2"
                placeholder="Location"
              />
            </>
          ) : (
            <>
              <h2 className="font-bold text-2xl text-[#23235b] dark:text-white">{form.username}</h2>
              <p className="text-[#7b2ff2] dark:text-[#b0b3c6]">{form.bio}</p>
              <div className="text-[#23235b] dark:text-white text-sm">
                <span className="font-semibold">Email:</span> {form.email}
              </div>
              <div className="text-[#23235b] dark:text-white text-sm">
                <span className="font-semibold">Location:</span> {form.location}
              </div>
            </>
          )}
          <div className="flex gap-2 mt-4">
            {edit ? (
              <button
                className="bg-[#7b2ff2] text-white px-4 py-2 rounded-xl font-bold shadow hover:bg-[#5b1fd1] transition"
                onClick={handleSave}
              >
                Save
              </button>
            ) : (
              <button
                className="bg-[#e3eafe] dark:bg-[#7b2ff2] text-[#23235b] dark:text-white px-4 py-2 rounded-xl font-bold shadow hover:bg-[#dbeafe] dark:hover:bg-[#5b1fd1] transition"
                onClick={() => setEdit(true)}
              >
                Edit Profile
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Settings */}
      <div className="max-w-4xl mx-auto mt-8 opacity-80 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-[#23235b] rounded-2xl shadow p-6">
          <h3 className="font-bold text-lg mb-4 text-[#23235b] dark:text-white">Profile Information</h3>
          <p className="mb-4 text-[#23235b] dark:text-[#b0b3c6]">{form.bio || "Add your bio here."}</p>
          <div className="mb-2 text-[#23235b] dark:text-white"><span className="font-semibold">Full Name:</span> {form.username}</div>
          <div className="mb-2 text-[#23235b] dark:text-white"><span className="font-semibold">Email:</span> {form.email}</div>
          <div className="mb-2 text-[#23235b] dark:text-white"><span className="font-semibold">Location:</span> {form.location}</div>
          <div className="mb-2 text-[#23235b] dark:text-white"><span className="font-semibold">Social:</span>
            <span className="ml-2"> {/* Add social icons/links here if needed */}</span>
          </div>
        </div>


        <div className="bg-white dark:bg-[#23235b] rounded-2xl shadow p-6">
          <h3 className="font-bold text-lg mb-4 text-[#23235b] dark:text-white">Platform Settings</h3>
          <div className="mb-2 font-semibold text-[#23235b] dark:text-white">Account</div>
          <div className="flex flex-col gap-2 mb-4">
            <label className="flex items-center gap-2">
              <input type="checkbox" checked={settings.emailFollow} onChange={() => handleToggle("emailFollow")} className="accent-[#7b2ff2]" />
              Email me when someone follows me
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" checked={settings.emailAnswer} onChange={() => handleToggle("emailAnswer")} className="accent-[#7b2ff2]" />
              Email me when someone answers on my post
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" checked={settings.emailMention} onChange={() => handleToggle("emailMention")} className="accent-[#7b2ff2]" />
              Email me when someone mentions me
            </label>
          </div>
          <div className="mb-2 font-semibold text-[#23235b] dark:text-white">Application</div>
          <div className="flex flex-col gap-2">
            <label className="flex items-center gap-2">
              <input type="checkbox" checked={settings.launches} onChange={() => handleToggle("launches")} className="accent-[#7b2ff2]" />
              New launches and projects
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" checked={settings.updates} onChange={() => handleToggle("updates")} className="accent-[#7b2ff2]" />
              Monthly product updates
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" checked={settings.newsletter} onChange={() => handleToggle("newsletter")} className="accent-[#7b2ff2]" />
              Subscribe to newsletter
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileCard