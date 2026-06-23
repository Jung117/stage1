import urllib.request as request
import json
import csv

# Task 1-1
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


# Generate hotels.csv
get_eng_info = {}	# Dict for storing required English hotel info 

# Create an entry for each hotel
for hotel in h_list_cn:
	get_eng_info[hotel["_id"]] = ""

# Extract the required English hotel info from the English hotel list by id
for hotel in h_list_eng:
	if hotel["_id"] in get_eng_info:
		get_eng_info[hotel["_id"]] = [hotel["hotel name"], hotel["address"]]
	else:
		get_eng_info[hotel["_id"]] = ["Name not found.", "Address not found."]


# Write hotel data to the hotels.csv file
with open("hotels.csv", mode = "w", newline = "", encoding = "utf-8") as file:
	for hotel in h_list_cn:
		writer = csv.writer(file)
		writer.writerow([hotel["旅宿名稱"], get_eng_info[hotel["_id"]][0], hotel["地址"], 
				   get_eng_info[hotel["_id"]][1], hotel["電話或手機號碼"], hotel["房間數"]])
		


# Task 1-2
# Generate districs.csv
district_info = {}	# Dict for storing district info: {"district": [hotels count, total rooms]}

# Count hotels and sum room numbers by district
for hotel in h_list_cn:
	if hotel["地址"][3:6] not in district_info:
		district_info[hotel["地址"][3:6]] = [1, int(hotel["房間數"])]
	else:
		district_info[hotel["地址"][3:6]][0] += 1
		district_info[hotel["地址"][3:6]][1] += int(hotel["房間數"])


# Write distric data to the districts.csv file
with open("districts.csv", mode = "w", newline = "", encoding = "utf-8") as file:
	for district, counts in district_info.items():
		writer = csv.writer(file)
		writer.writerow([district, counts[0], counts[1]])