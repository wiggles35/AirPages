echo -e "\nSTART LOCUST WORKERS\n"
PID_WORKERS=()
for ((i = 1; i <= 6; i++)); do
    locust -f loc.py --worker &
    PID_WORKERS+=($!)
done
echo "LOCUST WORKER PIDS = ${PID_WORKERS[@]}"
