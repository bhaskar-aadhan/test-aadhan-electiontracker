import React, { useState } from 'react';
import { Copy } from "lucide-react";
import { Button } from "~/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog"
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Link } from '@remix-run/react';
import { copyTextToClipboard } from '~/services/ElectionServices.js'
import { whatsappImg, electionShareImg } from '~/assets/images';

const Share = () => {
  const [copyText, setCopyText] = useState("https://adan.page.link/RUFSiafnb2NnqkRF6")
  const [isClicked, setIsClicked] = useState(false)
  return (
    <Dialog className="rounded-md">
      <DialogTrigger asChild>
        <Button className='wa-app-icon table__shadow p-1 w-10 h-10 border-0 bg-transparent hover:rotate-[20deg] transition-transform ' variant="outline">
          <img src={whatsappImg} className='hover:text-[black]' alt='share' />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md rounded-xl">
        <DialogHeader>
          <DialogTitle>
            <img src={electionShareImg} className='w-[95%] mx-auto rounded-lg' alt='preview' />
          </DialogTitle>
          <DialogDescription className='text-[15px] text-black font-medium'>
            Assembly Election Results
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="link" className="sr-only">
              Link
            </Label>
            <Input
              id="link"
              defaultValue={copyText}
              readOnly
            />
          </div>
          <Link target='_blank' to={`whatsapp://send?text=${copyText}`}><img src={whatsappImg} className='w-8' alt='whatsapp' /></Link>
          <Button type="submit" size="sm" className="px-3">
            <span className="sr-only">Copy</span>
            <Copy className={`h-4 w-4 ${isClicked && 'scale-[0.8]'}`} onClick={() => { copyTextToClipboard(copyText); setIsClicked(true); setTimeout(() => setIsClicked(false), 100) }} />
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default Share
