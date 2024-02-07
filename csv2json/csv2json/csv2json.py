import nextpy as xt
import csv
import asyncio
import ast
from fastapi import UploadFile
class Conversion(xt.State):
    """The app state."""
    l1:list[str]
    keys:list[str]
    json_dict:dict[str,str]
    json:list[str]
    user_data:str
    user_upload:str
    
    async def user_file(self,files: list[UploadFile]):
        for file in files:
            upload_data = await file.read()
            outfile = xt.get_asset_path(file.filename)

            with open(outfile, "wb") as file_object:
                file_object.write(upload_data)
    

            with open(outfile, mode ='r') as file_data:
                csvFile = csv.reader(file_data)

                for row in csvFile:
                    self.l1.append(row)
        self.user_upload=('[\n' + ',\n'.join(map(str, self.l1)) + ',\n]')
        csvFile=None
        
    
        
    def change_data(self, new_data:str):
        self.user_upload=new_data
    
    def clear(self):
        xt.clear_selected_files
        self.user_upload=''
        self.user_data=''
        self.l1=[]
    
    async def csv_to_json(self, files: list[UploadFile]):
        """Handle the upload of file(s).
    
        Args:
            files: The uploaded files.
        """
        # for file in files:
        #     upload_data = await file.read()
        #     outfile = xt.get_asset_path(file.filename)

        #     with open(outfile, "wb") as file_object:
        #         file_object.write(upload_data)
    

        #     with open(outfile, mode ='r') as file_data:
        #         csvFile = csv.reader(file_data)

        #         for row in csvFile:
        #             self.l1.append(row)    
        print(self.user_upload)
        self.user_upload = ast.literal_eval(self.user_upload)
        self.keys=self.user_upload.pop(0)
        
        for j in self.user_upload:
            
            self.json_dict={}
            
            for i in range(0,len(self.keys)):
                
                self.json_dict[self.keys[i]]=j[i]
            self.json.append(self.json_dict.copy())
        self.user_data=('[\n' + ',\n'.join(map(str, self.json)) + ',\n]')
        # print(self.user_data,type(self.user_data))
        
        
        
    

def index():
    """The main view."""
    return xt.vstack(
        xt.hstack(
        xt.input(
            value=Conversion.user_upload,
            on_change=Conversion.change_data,
            rows='6'
            ),
        xt.input(
            value=Conversion.user_data,
            rows='6'
            ),
        ),
        xt.upload(
            xt.text("Drag and drop files here or click to select files"),
            border="1px dotted rgb(107,99,246)",
            padding="2em",
            multiple=True,
            accept={
               "application/pdf": [".csv",".json"],
            },
            max_files=5,
        ),
        xt.button(
            "Upload",
            on_click=lambda: Conversion.user_file(xt.upload_files()),
        ),
        xt.hstack(
        xt.button(
            "Convert to JSON",
            on_click=lambda: Conversion.csv_to_json(xt.upload_files()),
        )),
        xt.button(
            "Clear",
            on_click=Conversion.clear ,
        ),
    )

# Create the app.
app = xt.App()
app.add_page(index)