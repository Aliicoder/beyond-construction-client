export const handleEstateShare = (e: React.MouseEvent, documentId: string) => {
  e.preventDefault();
  e.stopPropagation();
  const url = `${window.location.origin}/real-estates/${documentId}`;

  if (navigator.share) {
    navigator.share({
      title: "عقار مميز",
      text: "شاهد هذا العقار",
      url,
    });
  } else {
    navigator.clipboard.writeText(url);
    alert("تم نسخ رابط العقار");
  }
};
