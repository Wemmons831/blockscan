import requests
e = 0
c = 0
while(True):
    r = requests.get("http://173.54.206.216")
    if(r.status_code == 500):
        e+=1
    else:
        c+=1
    print(f"{r.status_code} errors = {e} e% = {e/c}")