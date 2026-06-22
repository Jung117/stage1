import urllib.request as request
import json
import csv

# Task 1
src_cn = "https://resources-wehelp-taiwan-b986132eca78c0b5eeb736fc03240c2ff8b7116.gitlab.io/hotels-ch"
src_eng = "https://resources-wehelp-taiwan-b986132eca78c0b5eeb736fc03240c2ff8b7116.gitlab.io/hotels-en"

# Retrieve hotel info from JSON files
with request.urlopen(src_cn) as response:
		data_cn = json.load(response)

with request.urlopen(src_eng) as response:
		data_eng = json.load(response)

# Extract the main data list
h_list_cn = data_cn["list"]
h_list_eng = data_eng["list"]


# Dic for storing required English hotel info  
get_eng_info = {}
# Create an entry for each hotel
for hotel in h_list_cn:
	get_eng_info[hotel["_id"]] = ""

# Extract the required English hotel info from the English hotel list by id
for hotel in h_list_eng:
	if hotel["_id"] in get_eng_info:
		get_eng_info[hotel["_id"]] = [hotel["hotel name"], hotel["address"]]
	else:
		get_eng_info[hotel["_id"]] = ["Name not found.", "Address not found."]
	

# Write hotel data to the hotel.csv file
with open("hotel.csv", mode = "w", newline = "", encoding = "utf-8") as file:
	for hotel in h_list_cn:
		writer = csv.writer(file)
		writer.writerow([hotel["旅宿名稱"], get_eng_info[hotel["_id"]][0], hotel["地址"], 
				   get_eng_info[hotel["_id"]][1], hotel["電話或手機號碼"], hotel["房間數"]])