import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

//header
const Title = () => (
  <a href="/">
    <img
      className="logo"
      src="https://github.com/parth-nexus/namastereact/blob/main/logo.png?raw=true"
      alt="logo file villa"
    ></img>
  </a>
);
const Heading = () => {
  return (
    <div className="header">
      <div>
        <Title />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const data = [
  {
    cardType: "restaurant",
    layoutAlignmentType: "VERTICAL",
    data: {
      type: "restaurant",
      data: {
        type: "F",
        id: "100179",
        name: "Kutchi King",
        uuid: "43a4775a-8a88-4bb3-a0fc-62554a02dd8a",
        city: "10",
        area: "Bapunagar",
        totalRatingsString: "20+ ratings",
        cloudinaryImageId: "mnkemqabqg9mpevlcmd3",
        cuisines: ["Snacks", "Pizzas"],
        tags: [],
        costForTwo: 20000,
        costForTwoString: "₹200 FOR TWO",
        deliveryTime: 13,
        minDeliveryTime: 13,
        maxDeliveryTime: 13,
        slaString: "13 MINS",
        lastMileTravel: 0.10000000149011612,
        slugs: {
          restaurant: "kutchi-king-bapunagar-bapunagar",
          city: "ahmedabad",
        },
        cityState: "10",
        address:
          "28, Ground Floor, Shukhsagar Complex, Opposite Dinesh Chamber, Near Kakadiya Hospital., Bapunagar, Ahmedabad",
        locality: "Shukhsagar Complex",
        parentId: 7136,
        unserviceable: false,
        veg: true,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: "50% off",
          shortDescriptionList: [
            {
              meta: "50% off | Use WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "50% off up to ₹100 | Use code WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
          header: "50% OFF",
          shortDescriptionList: [
            {
              meta: "Use WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "50% off up to ₹100 | Use code WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        chain: [],
        feeDetails: {
          fees: [],
          totalFees: 0,
          message: "",
          title: "",
          amount: "",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID: "",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: "0.1 kms",
        hasSurge: false,
        sla: {
          restaurantId: "100179",
          deliveryTime: 13,
          minDeliveryTime: 13,
          maxDeliveryTime: 13,
          lastMileTravel: 0.10000000149011612,
          lastMileDistance: 0,
          serviceability: "SERVICEABLE",
          rainMode: "NONE",
          longDistance: "NOT_LONG_DISTANCE",
          preferentialService: false,
          iconType: "EMPTY",
        },
        promoted: false,
        avgRating: "3.5",
        totalRatings: 20,
        new: false,
      },
      subtype: "basic",
    },
    parentWidget: false,
  },
  {
    cardType: "restaurant",
    layoutAlignmentType: "VERTICAL",
    data: {
      type: "restaurant",
      data: {
        type: "F",
        id: "546166",
        name: "The Lio' Pizza",
        uuid: "fa3bb2d9-d3aa-4799-be06-00a1ab005066",
        city: "10",
        area: "Bapunagar",
        totalRatingsString: "Too Few Ratings",
        cloudinaryImageId: "o07ij3vcgbytcobt8051",
        cuisines: ["Pizzas", "Italian-American", "Beverages", "Snacks"],
        tags: [],
        costForTwo: 20000,
        costForTwoString: "₹200 FOR TWO",
        deliveryTime: 24,
        minDeliveryTime: 24,
        maxDeliveryTime: 24,
        slaString: "24 MINS",
        lastMileTravel: 0.20000000298023224,
        slugs: {
          restaurant: "the-lio'-pizza-bapunagar-bapunagar",
          city: "ahmedabad",
        },
        cityState: "10",
        address:
          "18-19 Shaktidhara Society Opp Indecab Lab Near Bapunagar Toll Naka Thakkarbapanagar , Naroda(North Zone) , Ahmedabad Municipal Corporation, Ahmedabad, Gujarat-382350",
        locality: "Opp Indecab Lab",
        parentId: 236933,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: "50% off",
          shortDescriptionList: [
            {
              meta: "50% off | Use WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "50% off up to ₹100 | Use code WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
          header: "50% OFF",
          shortDescriptionList: [
            {
              meta: "Use WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "50% off up to ₹100 | Use code WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        chain: [],
        feeDetails: {
          fees: [],
          totalFees: 0,
          message: "",
          title: "",
          amount: "",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID: "",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: "0.2 kms",
        hasSurge: false,
        sla: {
          restaurantId: "546166",
          deliveryTime: 24,
          minDeliveryTime: 24,
          maxDeliveryTime: 24,
          lastMileTravel: 0.20000000298023224,
          lastMileDistance: 0,
          serviceability: "SERVICEABLE",
          rainMode: "NONE",
          longDistance: "NOT_LONG_DISTANCE",
          preferentialService: false,
          iconType: "EMPTY",
        },
        promoted: false,
        avgRating: "--",
        totalRatings: 0,
        new: false,
      },
      subtype: "basic",
    },
    parentWidget: false,
  },
  {
    cardType: "restaurant",
    layoutAlignmentType: "VERTICAL",
    data: {
      type: "restaurant",
      data: {
        type: "F",
        id: "95668",
        name: "Happinezz Ice Creams by Vadilal",
        uuid: "7ec3e7f9-7b71-4ed5-b03b-ab98f2e46e70",
        city: "10",
        area: "India Colony",
        totalRatingsString: "20+ ratings",
        cloudinaryImageId: "nybvtg38i6eaaas0kvwb",
        cuisines: ["Ice Cream", "Beverages", "Desserts"],
        tags: [],
        costForTwo: 25000,
        costForTwoString: "₹250 FOR TWO",
        deliveryTime: 19,
        minDeliveryTime: 19,
        maxDeliveryTime: 19,
        slaString: "19 MINS",
        lastMileTravel: 0.10000000149011612,
        slugs: {
          restaurant: "vadilal-bapunagar-bapunagar",
          city: "ahmedabad",
        },
        cityState: "10",
        address:
          "A-35, Lakhani Chambers, Near Dinesh Chamber, Lal Bahadur Shastri Road, Bapunagar, Ahmedabad-380024",
        locality: "Near Dinesh Chamber",
        parentId: 334547,
        unserviceable: false,
        veg: true,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: "50% off",
          shortDescriptionList: [
            {
              meta: "50% off | Use WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "50% off up to ₹100 | Use code WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
          header: "50% OFF",
          shortDescriptionList: [
            {
              meta: "Use WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "50% off up to ₹100 | Use code WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        chain: [],
        feeDetails: {
          fees: [],
          totalFees: 0,
          message: "",
          title: "",
          amount: "",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID: "",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: "0.1 kms",
        hasSurge: false,
        sla: {
          restaurantId: "95668",
          deliveryTime: 19,
          minDeliveryTime: 19,
          maxDeliveryTime: 19,
          lastMileTravel: 0.10000000149011612,
          lastMileDistance: 0,
          serviceability: "SERVICEABLE",
          rainMode: "NONE",
          longDistance: "NOT_LONG_DISTANCE",
          preferentialService: false,
          iconType: "EMPTY",
        },
        promoted: false,
        avgRating: "4.8",
        totalRatings: 20,
        new: false,
      },
      subtype: "basic",
    },
    parentWidget: false,
  },
  {
    cardType: "restaurant",
    layoutAlignmentType: "VERTICAL",
    data: {
      type: "restaurant",
      data: {
        type: "F",
        id: "129091",
        name: "Veeru'S Non Veg",
        uuid: "4e6aa7da-eaf9-43da-978e-a014d5d15b8d",
        city: "10",
        area: "D Colony",
        totalRatingsString: "50+ ratings",
        cloudinaryImageId: "xm1ilcvjrkokye7zjret",
        cuisines: ["North Indian", "Beverages"],
        tags: [],
        costForTwo: 25000,
        costForTwoString: "₹250 FOR TWO",
        deliveryTime: 23,
        minDeliveryTime: 23,
        maxDeliveryTime: 23,
        slaString: "23 MINS",
        lastMileTravel: 1.100000023841858,
        slugs: {
          restaurant: "veerus-non-veg-bapunagar-bapunagar",
          city: "ahmedabad",
        },
        cityState: "10",
        address:
          "Near Maruti Industrial Estate, Anil Starch Road, Bapunagar, Ahmedabad",
        locality: "Bapunagar",
        parentId: 221998,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: "50% off",
          shortDescriptionList: [
            {
              meta: "50% off | Use WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "50% off up to ₹100 | Use code WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
          header: "50% OFF",
          shortDescriptionList: [
            {
              meta: "Use WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "50% off up to ₹100 | Use code WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        chain: [],
        feeDetails: {
          fees: [],
          totalFees: 0,
          message: "",
          title: "",
          amount: "",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID: "",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: "1.1 kms",
        hasSurge: false,
        sla: {
          restaurantId: "129091",
          deliveryTime: 23,
          minDeliveryTime: 23,
          maxDeliveryTime: 23,
          lastMileTravel: 1.100000023841858,
          lastMileDistance: 0,
          serviceability: "SERVICEABLE",
          rainMode: "NONE",
          longDistance: "NOT_LONG_DISTANCE",
          preferentialService: false,
          iconType: "EMPTY",
        },
        promoted: false,
        avgRating: "4.0",
        totalRatings: 50,
        new: false,
      },
      subtype: "basic",
    },
    parentWidget: false,
  },
  {
    cardType: "restaurant",
    layoutAlignmentType: "VERTICAL",
    data: {
      type: "restaurant",
      data: {
        type: "F",
        id: "580911",
        name: "Joy Restaurant",
        uuid: "3a479a8d-c8c3-40d0-b64a-8ad0cce1e272",
        city: "10",
        area: "Bapunagar",
        totalRatingsString: "20+ ratings",
        cloudinaryImageId: "jq402qp20evrhkaj1wqx",
        cuisines: ["North Indian", "Chinese", "Fast Food", "Indian", "Pizzas"],
        tags: [],
        costForTwo: 50000,
        costForTwoString: "₹500 FOR TWO",
        deliveryTime: 16,
        minDeliveryTime: 16,
        maxDeliveryTime: 16,
        slaString: "16 MINS",
        lastMileTravel: 0.699999988079071,
        slugs: {
          restaurant: "joy-restaurant-bapunagar-bapunagar",
          city: "ahmedabad",
        },
        cityState: "10",
        address:
          "GF/ 8 to 10, Shayona Arcade opp Dinesh Champers Bapunagar, Ahmedabad,Gujarat-380024",
        locality: "Bapunagar",
        parentId: 111601,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: "50% off",
          shortDescriptionList: [
            {
              meta: "50% off | Use WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "50% off up to ₹100 | Use code WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
          header: "50% OFF",
          shortDescriptionList: [
            {
              meta: "Use WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "50% off up to ₹100 | Use code WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        chain: [],
        feeDetails: {
          fees: [],
          totalFees: 0,
          message: "",
          title: "",
          amount: "",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID: "",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: "0.6 kms",
        hasSurge: false,
        sla: {
          restaurantId: "580911",
          deliveryTime: 16,
          minDeliveryTime: 16,
          maxDeliveryTime: 16,
          lastMileTravel: 0.699999988079071,
          lastMileDistance: 0,
          serviceability: "SERVICEABLE",
          rainMode: "NONE",
          longDistance: "NOT_LONG_DISTANCE",
          preferentialService: false,
          iconType: "EMPTY",
        },
        promoted: false,
        avgRating: "3.9",
        totalRatings: 20,
        new: false,
      },
      subtype: "basic",
    },
    parentWidget: false,
  },
  {
    cardType: "restaurant",
    layoutAlignmentType: "VERTICAL",
    data: {
      type: "restaurant",
      data: {
        type: "F",
        id: "178679",
        name: "Anand Icecream And Cafe",
        uuid: "c795ff19-74ad-4b8e-a5b0-3334cfee8eb5",
        city: "10",
        area: "Bapunagar",
        totalRatingsString: "Too Few Ratings",
        cloudinaryImageId: "qmk3lxrgzh6dvtjm5cbc",
        cuisines: ["Desserts", "Ice Cream", "Snacks"],
        tags: [],
        costForTwo: 20000,
        costForTwoString: "₹200 FOR TWO",
        deliveryTime: 22,
        minDeliveryTime: 22,
        maxDeliveryTime: 22,
        slaString: "22 MINS",
        lastMileTravel: 0.5,
        slugs: {
          restaurant: "anand-icecream-and-cafe-naroda",
          city: "ahmedabad",
        },
        cityState: "10",
        address:
          "A/64, Shaktidhara Colony, Nr.Dinesh Chambers, Jagatnagar, Bapunagar\t",
        locality: "NAROL-NARODA ROAD",
        parentId: 32779,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: "50% off",
          shortDescriptionList: [
            {
              meta: "50% off | Use WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "50% off up to ₹100 | Use code WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
          header: "50% OFF",
          shortDescriptionList: [
            {
              meta: "Use WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "50% off up to ₹100 | Use code WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        chain: [],
        feeDetails: {
          fees: [],
          totalFees: 0,
          message: "",
          title: "",
          amount: "",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID: "",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: "0.5 kms",
        hasSurge: false,
        sla: {
          restaurantId: "178679",
          deliveryTime: 22,
          minDeliveryTime: 22,
          maxDeliveryTime: 22,
          lastMileTravel: 0.5,
          lastMileDistance: 0,
          serviceability: "SERVICEABLE",
          rainMode: "NONE",
          longDistance: "NOT_LONG_DISTANCE",
          preferentialService: false,
          iconType: "EMPTY",
        },
        promoted: false,
        avgRating: "--",
        totalRatings: 0,
        new: false,
      },
      subtype: "basic",
    },
    parentWidget: false,
  },
  {
    cardType: "restaurant",
    layoutAlignmentType: "VERTICAL",
    data: {
      type: "restaurant",
      data: {
        type: "F",
        id: "87903",
        name: "Iqbal Hotel-Since 1946",
        uuid: "72b7a62e-8e94-4abd-a092-016cb60f7d03",
        city: "10",
        area: "Khamasa",
        totalRatingsString: "500+ ratings",
        cloudinaryImageId: "niddsl0q8uk5i5e7fysr",
        cuisines: ["North Indian", "Mughlai", "Chinese", "Desserts", "Biryani"],
        tags: [],
        costForTwo: 35000,
        costForTwoString: "₹350 FOR TWO",
        deliveryTime: 40,
        minDeliveryTime: 40,
        maxDeliveryTime: 40,
        slaString: "40 MINS",
        lastMileTravel: 6.5,
        slugs: {
          restaurant: "iqbal-hotel-jamalpur-bopal",
          city: "ahmedabad",
        },
        cityState: "10",
        address: "Near Panchpipli Post Office, Chhipawad, Jamalpur, Ahmedabad",
        locality: "Jamalpur",
        parentId: 11160,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: "60% off",
          shortDescriptionList: [
            {
              meta: "60% off | Use TRYNEW",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "60% off up to ₹120 | Use code TRYNEW",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
          header: "60% OFF",
          shortDescriptionList: [
            {
              meta: "Use TRYNEW",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "60% off up to ₹120 | Use code TRYNEW",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        ribbon: [
          {
            type: "PROMOTED",
          },
        ],
        chain: [],
        feeDetails: {
          fees: [],
          totalFees: 0,
          message: "",
          title: "",
          amount: "",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID:
          "cid=5618473~p=25~eid=00000185-a53f-7c1e-2bae-1d2600a71979",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: "6.5 kms",
        hasSurge: false,
        sla: {
          restaurantId: "87903",
          deliveryTime: 40,
          minDeliveryTime: 40,
          maxDeliveryTime: 40,
          lastMileTravel: 6.5,
          lastMileDistance: 0,
          serviceability: "SERVICEABLE",
          rainMode: "NONE",
          longDistance: "NOT_LONG_DISTANCE",
          preferentialService: false,
          iconType: "EMPTY",
        },
        promoted: true,
        avgRating: "4.0",
        totalRatings: 500,
        new: false,
      },
      subtype: "basic",
    },
    parentWidget: false,
  },
  {
    cardType: "restaurant",
    layoutAlignmentType: "VERTICAL",
    data: {
      type: "restaurant",
      data: {
        type: "F",
        id: "551157",
        name: "Bread Man",
        uuid: "3e3eac37-1ba2-4d7d-8039-abe87bf04ab9",
        city: "10",
        area: "Bapunagar",
        totalRatingsString: "Too Few Ratings",
        cloudinaryImageId: "zvaqojjdfxdr7ycebsxh",
        cuisines: ["Bakery"],
        tags: [],
        costForTwo: 20000,
        costForTwoString: "₹200 FOR TWO",
        deliveryTime: 19,
        minDeliveryTime: 19,
        maxDeliveryTime: 19,
        slaString: "19 MINS",
        lastMileTravel: 0.30000001192092896,
        slugs: {
          restaurant: "breadman-bapunagar-bapunagar",
          city: "ahmedabad",
        },
        cityState: "10",
        address:
          "SHOP NO.B/8, JAGATNAGAR PART-1, INDIA COLONY ROAD, BAPUNAGAR, AHMEDABAD.380024",
        locality: "India Colony Road",
        parentId: 49709,
        unserviceable: false,
        veg: true,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: "50% off",
          shortDescriptionList: [
            {
              meta: "50% off | Use WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "50% off up to ₹100 | Use code WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
          header: "50% OFF",
          shortDescriptionList: [
            {
              meta: "Use WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "50% off up to ₹100 | Use code WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        chain: [],
        feeDetails: {
          fees: [],
          totalFees: 0,
          message: "",
          title: "",
          amount: "",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID: "",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: "0.3 kms",
        hasSurge: false,
        sla: {
          restaurantId: "551157",
          deliveryTime: 19,
          minDeliveryTime: 19,
          maxDeliveryTime: 19,
          lastMileTravel: 0.30000001192092896,
          lastMileDistance: 0,
          serviceability: "SERVICEABLE",
          rainMode: "NONE",
          longDistance: "NOT_LONG_DISTANCE",
          preferentialService: false,
          iconType: "EMPTY",
        },
        promoted: false,
        avgRating: "--",
        totalRatings: 0,
        new: false,
      },
      subtype: "basic",
    },
    parentWidget: false,
  },
  {
    cardType: "restaurant",
    layoutAlignmentType: "VERTICAL",
    data: {
      type: "restaurant",
      data: {
        type: "F",
        id: "330831",
        name: "William John's Pizza",
        uuid: "64654303-2264-446f-8bad-cb883506f907",
        city: "10",
        area: "Bapunagar",
        totalRatingsString: "Too Few Ratings",
        cloudinaryImageId: "rcldv3ar3mfnynggyyo7",
        cuisines: ["Indian"],
        tags: [],
        costForTwo: 20000,
        costForTwoString: "₹200 FOR TWO",
        deliveryTime: 21,
        minDeliveryTime: 21,
        maxDeliveryTime: 21,
        slaString: "21 MINS",
        lastMileTravel: 0.5,
        slugs: {
          restaurant: "william-johns-pizza-bapunagar-bapunagar",
          city: "ahmedabad",
        },
        cityState: "10",
        address: "1/FF, NEW ARVIND NAGAR SOCIETY, NR. NIKOL NAKA,380023",
        locality: "New Arvind Nagar Society",
        parentId: 226044,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: "50% off",
          shortDescriptionList: [
            {
              meta: "50% off | Use WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "50% off up to ₹100 | Use code WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
          header: "50% OFF",
          shortDescriptionList: [
            {
              meta: "Use WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "50% off up to ₹100 | Use code WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        chain: [],
        feeDetails: {
          fees: [],
          totalFees: 0,
          message: "",
          title: "",
          amount: "",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID: "",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: "0.5 kms",
        hasSurge: false,
        sla: {
          restaurantId: "330831",
          deliveryTime: 21,
          minDeliveryTime: 21,
          maxDeliveryTime: 21,
          lastMileTravel: 0.5,
          lastMileDistance: 0,
          serviceability: "SERVICEABLE",
          rainMode: "NONE",
          longDistance: "NOT_LONG_DISTANCE",
          preferentialService: false,
          iconType: "EMPTY",
        },
        promoted: false,
        avgRating: "--",
        totalRatings: 0,
        new: false,
      },
      subtype: "basic",
    },
    parentWidget: false,
  },
  {
    cardType: "restaurant",
    layoutAlignmentType: "VERTICAL",
    data: {
      type: "restaurant",
      data: {
        type: "F",
        id: "609345",
        name: "Chennai cafe",
        uuid: "de47ddcc-4424-4dc6-b7ca-2cf2a7bffcd0",
        city: "10",
        area: "Shahibaug",
        totalRatingsString: "Too Few Ratings",
        cloudinaryImageId: "nwbcz2si3cd7dnit2dtv",
        cuisines: ["South Indian", "Fast Food"],
        tags: [],
        costForTwo: 30000,
        costForTwoString: "₹300 FOR TWO",
        deliveryTime: 38,
        minDeliveryTime: 38,
        maxDeliveryTime: 38,
        slaString: "38 MINS",
        lastMileTravel: 5,
        slugs: {
          restaurant: "chennai-cafe-shahibag-shahibag",
          city: "ahmedabad",
        },
        cityState: "10",
        address:
          "FF-105, TRINITY PLAZA, NR. SANIDEV TEMPLE, OPP. RELIANCE FRESH, UNDERBRIDGE ROAD, SHAHIBAUG, AHMEDABAD ,-380004",
        locality: "Shahibaug",
        parentId: 59777,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: "50% off",
          shortDescriptionList: [
            {
              meta: "50% off | Use WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "50% off up to ₹100 | Use code WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
          header: "50% OFF",
          shortDescriptionList: [
            {
              meta: "Use WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "50% off up to ₹100 | Use code WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        ribbon: [
          {
            type: "PROMOTED",
          },
        ],
        chain: [],
        feeDetails: {
          fees: [],
          totalFees: 0,
          message: "",
          title: "",
          amount: "",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID:
          "cid=5566198~p=28~eid=00000185-a53f-7c1e-2bae-1d2700a71c78",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: "5 kms",
        hasSurge: false,
        sla: {
          restaurantId: "609345",
          deliveryTime: 38,
          minDeliveryTime: 38,
          maxDeliveryTime: 38,
          lastMileTravel: 5,
          lastMileDistance: 0,
          serviceability: "SERVICEABLE",
          rainMode: "NONE",
          longDistance: "NOT_LONG_DISTANCE",
          preferentialService: false,
          iconType: "EMPTY",
        },
        promoted: true,
        avgRating: "--",
        totalRatings: 0,
        new: false,
      },
      subtype: "basic",
    },
    parentWidget: false,
  },
];

//body
const RestaurantCard = ({
  name,
  cuisines,
  avgRating,
  slaString,
  cloudinaryImageId,
}) => {
  return (
    <div className="card">
      <img
        src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${cloudinaryImageId}`}
      ></img>
      <h2>{name}</h2>
      <h5>{cuisines.join(", ")}</h5>
      <h5>{avgRating} stars</h5>
      <h5>{slaString} ETA</h5>
    </div>
  );
};

const Body = () => {
  return (
    <div className="restaurantList">
      {data.map((ele, index) => {
        return <RestaurantCard key={ele.data.data.id} {...ele.data.data} />;
      })}
    </div>
  );
};

//footer
const Footer = () => {
  return <div className="footer">Footer</div>;
};

const AppLayout = () => {
  return (
    <>
      <Heading />
      <Body />
      <Footer />
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
