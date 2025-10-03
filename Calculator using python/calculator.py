from tkinter import *
from tkinter import messagebox

root = Tk()
root.title("calculator")
root.geometry("400x400")

def click(event):
    global entry
    text = event.widget.cget("text")
    if text=="=":
        if entry.get().isdigit():
            value=int(entry.get())
        else:
            try:
                value = eval(entry.get())
            except SyntaxError:
                messagebox.showerror("Syntax Error", "Please enter a valid expression.")
                return
            except Exception as e:
                messagebox.showerror("Error", str(e))
                return
           
        entry.set(value)
        screen.update()
    elif text=="C":
        entry.set("")
        screen.update()
    else:
        entry.set(entry.get()+text)
        screen.update()

def validate_input(P):
    if P.isalpha():
        messagebox.showerror("Invalid Input", "Please enter only numbers.")
        return False

    elif P == "":
        return True  # Allow empty input
        
    else:
        return True

# Register the validation function
vcmd = root.register(validate_input)


# textbox
entry =StringVar()
screen=Entry(root,textvariable=entry,font="futura 20 bold", validate="key", validatecommand=(vcmd, '%P'))
screen.pack(fill=X,ipadx=10,ipady=10,padx=10,pady=10)

#first frame for 4 butttons
f1=Frame(root,bg="grey")

b1=Button(f1,text="C",font="futura 15 bold",padx=30)
b1.pack(side=LEFT,padx=5,pady=5)
b1.bind("<Button-1>",click)

b2=Button(f1,text="(",font="futura 15 bold",padx=30)
b2.pack(side=LEFT,padx=5,pady=5)
b2.bind("<Button-1>",click)

b3=Button(f1,text=")",font="futura 15 bold",padx=30)
b3.pack(side=LEFT,padx=5,pady=5)
b3.bind("<Button-1>",click)

b4=Button(f1,text="/",font="futura 15 bold",padx=30)
b4.pack(side=LEFT,padx=5,pady=5)
b4.bind("<Button-1>",click)

f1.pack(expand=True)

# second frame
f2=Frame(root,bg="grey")

b5=Button(f2,text="7",font="futura 15 bold",padx=30)
b5.pack(side=LEFT,padx=5,pady=5)
b5.bind("<Button-1>",click)

b6=Button(f2,text="8",font="futura 15 bold",padx=30)
b6.pack(side=LEFT,padx=5,pady=5)
b6.bind("<Button-1>",click)

b7=Button(f2,text="9",font="futura 15 bold",padx=30)
b7.pack(side=LEFT,padx=5,pady=5)
b7.bind("<Button-1>",click)

b8=Button(f2,text="*",font="futura 15 bold",padx=30)
b8.pack(side=LEFT,padx=5,pady=5)
b8.bind("<Button-1>",click)

f2.pack(expand=True)

# third frame
f3=Frame(root,bg="grey")

b9=Button(f3,text="4",font="futura 15 bold",padx=30)
b9.pack(side=LEFT,padx=5,pady=5)
b9.bind("<Button-1>",click)

b10=Button(f3,text="5",font="futura 15 bold",padx=30)
b10.pack(side=LEFT,padx=5,pady=5)
b10.bind("<Button-1>",click)

b11=Button(f3,text="6",font="futura 15 bold",padx=30)
b11.pack(side=LEFT,padx=5,pady=5)
b11.bind("<Button-1>",click)

b12=Button(f3,text="-",font="futura 15 bold",padx=30)
b12.pack(side=LEFT,padx=5,pady=5)
b12.bind("<Button-1>",click)

f3.pack(expand=True)

# fourth frame
f4=Frame(root,bg="grey")

b13=Button(f4,text="1",font="futura 15 bold",padx=30)
b13.pack(side=LEFT,padx=5,pady=5)
b13.bind("<Button-1>",click)

b14=Button(f4,text="2",font="futura 15 bold",padx=30)
b14.pack(side=LEFT,padx=5,pady=5)
b14.bind("<Button-1>",click)

b15=Button(f4,text="3",font="futura 15 bold",padx=30)
b15.pack(side=LEFT,padx=5,pady=5)
b15.bind("<Button-1>",click)

b16=Button(f4,text="+",font="futura 15 bold",padx=30)
b16.pack(side=LEFT,padx=5,pady=5)
b16.bind("<Button-1>",click)

f4.pack(expand=True)

# fifth frame
f5=Frame(root,bg="grey")

b17=Button(f5,text="%",font="futura 15 bold",padx=30)
b17.pack(side=LEFT,padx=5,pady=5)
b17.bind("<Button-1>",click)

b18=Button(f5,text="0",font="futura 15 bold",padx=30)
b18.pack(side=LEFT,padx=5,pady=5)
b18.bind("<Button-1>",click)

b19=Button(f5,text=".",font="futura 15 bold",padx=30)
b19.pack(side=LEFT,padx=5,pady=5)
b19.bind("<Button-1>",click)

b20=Button(f5,text="=",font="futura 15 bold",padx=30)
b20.pack(side=LEFT,padx=5,pady=5)
b20.bind("<Button-1>",click)

f5.pack(expand=True)


root.mainloop()